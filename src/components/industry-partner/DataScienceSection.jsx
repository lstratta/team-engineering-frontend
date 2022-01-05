import GraduateCard from "./GraduateCard";

const DataScienceSection = (graduates) => {

    const graduatesData = graduates.graduates;

    return (
        <div className="data-science-section">
                <div className="data-science-title">
                    <h3>Data Science</h3>
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