
import GraduateCard from "./GraduateCard";

import "../../css/pathway-section.css";
const DataScienceSection = (graduates) => {

    const graduatesData = graduates.graduates;

    return (
        <div className="pathway-section">
            <div className="title">
                <br />
                <h2>Software Engineering</h2>
            </div>
            <div className="wide-div">
                {graduatesData.map((graduate) => {
                    // "learningPath": "Software Engineering",
                    if (graduate.learningPath == "Software Engineering") {
                        return (

                            <div className="gradCard" key={graduate._id}>
                                < GraduateCard graduate={graduate} />
                            </div>

                        )
                    }
                }
                )
                }

            </div>
        </div>

    );
}

export default DataScienceSection;