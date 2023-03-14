import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function GetallBaby() {

    const [search, setSearch] = useState({ typeId: -1, categoryId: -1, subCategoryId: -1, datePublished: null, startDate: null, endDate: null, common: "defaultValue" })
    // const [babySitters, setBabySitters] = useState([{BabysiterId:-1,FirstName:"",LastName:"",Age:0,Email:"",Password:"",Description:"",Phone:""
    // ,times:[{TimeId:0,BabysiterId:0,Day:"",PartOfDay:"",Price:0}],NeighborhoodBabysiter:[{NeighborhoodBabysiterId:0,BabysiterId:0,NeighborhoodId:0}]}])
    const [baby, setbaby] = useState([])

    const [babySitters, setBabySitters] = useState([]);
    useEffect(() => {

        // setBabySitters({...babySitters,"BabysiterId":5})
        try {
            const updateUsers = [];
            var babySiterList = [];
            var time = [];
            var Neighborhood = []

            axios.get(`https://localhost:44312/api/BabySiter/GetAll`)
                .then(async (response) => {

                    babySiterList = response.data;
                    // response.data.forEach(w => {
                    //     setbaby([...baby,10])
                    //     console.log(baby);  
                    //     })
                    // setbaby([...baby,10])
                    // setbaby([...baby,10])

                    //     console.log(baby); 





                    for (let index = 0; index < response.data.length; index++) {
                        let id = response.data[index].babysiterId
                        time = await axios.get(`https://localhost:44312/api/Time/Get?BabysiterId=${id}`)
                            .then(response => response.data)
                        Neighborhood = await axios.get(`https://localhost:44312/api/NeighborhoodBabysiter/Get?id=${id}`)
                            .then(respon => respon.data)
                        // var babySiter = b[babySiter[index], time[index], Neighborhood[index]]
                        babySiterList[index].Neighborhood = Neighborhood;
                        babySiterList[index].time = time

                        // setBabySitters(a)
                        console.log(babySitters);
                    }
                    setBabySitters(babySiterList);
                    // setBabySitters((prev)=>[
                    //         ...b
                    //     ]);
                });


        }


        catch (err) {
            console.error(err);
        }

    }, []);

    return (<div>
{babySitters.map((babySiter,index)=><div key={index}>{babySiter.firstName}</div>)}
        {/* <button onClick={t}>y</button> */}
    </div>);
};
