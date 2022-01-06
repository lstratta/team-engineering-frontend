
import GraduateCard from "./GraduateCard";

const DataScienceSection = (graduates) => {

    const graduatesData = graduates.graduates;

    return (
        <div className="pathway-section">
            <div className="title">
                <h3>Software Engineering</h3>
            </div>
            <div className="wide-div">
                {graduatesData.map((graduate) => {
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

    );
}

export default DataScienceSection;