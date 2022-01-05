import { useState, useEffect } from "react";
import axios from "axios";
import GraduateCard from "./GraduateCard.jsx";

const TalentSpotlight = (serverURL) => {

    const [graduates, setGraduates] = useState([]);

    const dataServer = serverURL.serverURL+"graduateUser";
    console.log("TALENT SPOTLIGHT SERVER URL", serverURL.serverURL);

    const getData = async () => {
        await axios.get(dataServer)
            .then(res => {
                setGraduates(res.data)
            })
            .catch(err => console.log(err));
        }

    useEffect(() => {
        getData()            
    }, [])


    return( 
        <div>
            <div className="headline">
               <h2>Talent Spotlight</h2>
            </div>
            <div className="description">
                <p> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  </p>
            </div>
            <div className="software-engineering-section">
                <div className="software-engineering-title">
                    <h3>Software Engineering</h3>
                </div>
                <div>
                    {
                        graduates.map( (graduate) => {
                               return (
                                   <div key={graduate._id}>
                                        < GraduateCard graduate={graduate} />
                                   </div>
                                   )
                            }
                     )
                    } 
                    
                </div>
            </div>
            <div className="data-science-section">
                <div className="data-science-title">
                    <h3>Data Science</h3>
                </div>
                <div>
                    {/* map to jsx data */} 
                </div>
            </div>

        </div> 
    );

}

export default TalentSpotlight;