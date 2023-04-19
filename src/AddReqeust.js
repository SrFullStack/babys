
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddReqeust() {

    useEffect(() => {

        try {
            axios.get(`https://localhost:44312/api/SearchBabySiter/Get=${password}&Email=${email}`)
                .then(async (response) => {
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
jjjj

    </div>);
};

