import axios from "axios";
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

import "../../css/all-graduates.css"

const AllGraduates = ( {serverURL} ) => {

    const [ allGraduates, setAllGraduates ] = useState();

    const getData = async () => {

        await axios.get(`${serverURL}graduate`)
            .then( res => {

                setAllGraduates(res.data)

                
            })
    }

    useEffect ( () => {

        getData()
        //console.log("ALL GRADUATES ", allGraduates)
    }, [] )

    return (
        <div>
            <div >
                {allGraduates && allGraduates.map( graduate => (
                        
                        <div className="graduate-profile-card" key={graduate._id}>
                            <ProfileCard graduate={graduate} />
                        </div>
                    )) 
                }
            </div>

        </div>
    );
}

export default AllGraduates;