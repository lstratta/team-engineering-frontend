import { useState, useEffect } from "react";
import axios from "axios";

import GraduateCard from "./GraduateCard.jsx";
import DataScienceSection from "./DataScienceSection.jsx";
import SoftwareEngineeringSection from "./SoftwareEngineeringSection.jsx";
import "../../css/talent-spotlight.css";

const TalentSpotlight = (serverURL) => {

    const [graduates, setGraduates] = useState([]);

    const dataServer = serverURL.serverURL + "graduateUser";
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


    return (
        <div>
            <div className="headline">
                <h2>Talent Spotlight</h2>
            </div>
            <div className="description">
                <p> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
            </div>

            <div className="data-science-section">
                <DataScienceSection graduates={graduates} />
            </div>

            <div className="software-engineering-section">
                <SoftwareEngineeringSection graduates={graduates} />
            </div>

        </div>
    );

}

export default TalentSpotlight;