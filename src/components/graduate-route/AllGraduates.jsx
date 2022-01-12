import axios from "axios";
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Navbar from "../NavBar"

import 'bootstrap/dist/css/bootstrap.min.css';
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

            <Navbar />
            {/* <Navbar id={allGraduates}/> */}
            
            <div className="wide-div">
                {allGraduates && allGraduates.map( graduate => (
                        // <div className="outer-graduate" key={graduate._id}>
                            <div class="col-md-8 mx-auto" key={graduate._id}>
                                <ProfileCard graduate={graduate} />
                            </div>
                        // </div>
                    )) 
                }
            </div>

        </div>
    );
}

export default AllGraduates;