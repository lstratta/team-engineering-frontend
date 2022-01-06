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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga atque cupiditate est, vero eligendi impedit quae incidunt soluta tenetur laborum laudantium dolores repellendus blanditiis facilis veritatis. Autem veritatis consequuntur expedita exercitationem distinctio nesciunt quisquam, iste rerum, ratione quaerat placeat atque eveniet reiciendis laborum quo amet vero, blanditiis error? Ipsum perferendis laboriosam fugit tenetur, molestiae recusandae sapiente aliquid iste non consequuntur. Hic ipsa a nemo distinctio deserunt reprehenderit voluptas voluptatem impedit, recusandae, corrupti, doloremque qui. Consectetur cum ea suscipit soluta sint, ad pariatur tempora laboriosam explicabo illum culpa velit rerum quaerat minus neque nam blanditiis iure at quis. Ipsum, sunt.
                </p>
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