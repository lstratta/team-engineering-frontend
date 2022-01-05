
import GraduateCard from "./GraduateCard";

const DataScienceSection = (graduates) => {

    const graduatesData = graduates.graduates;

    return (
        <div className="software-engineering-section">
                <div className="software-engineering-title">
                    <h3>Software Engineering</h3>
                </div>
                <div>
                    { graduatesData.map( (graduate) => {
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