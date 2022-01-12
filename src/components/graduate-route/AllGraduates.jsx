import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProfileCard from "./ProfileCard";

const AllGraduates = ( {serverURL} ) => {

    const [ allGraduates, setAllGraduates ] = useState();

    const getData = async () => {

        await axios.get(`${serverURL}graduate`)
            .then( res => {
                setAllGraduates(res.data)

                console.log("ALL GRADUATES ", allGraduates)
            })
    }

    useEffect ( () => {
        getData()
        
    }, [] )

    return (
        <div>

            {allGraduates && allGraduates.map( graduate => (
                    
                    <div key={graduate._id}>
                        <ProfileCard graduate={graduate} />
                    </div>
    )) 
            }

        </div>
    );
}

export default AllGraduates;