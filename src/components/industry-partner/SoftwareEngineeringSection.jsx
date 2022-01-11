import GraduateCard from "./GraduateCard";
import "../../css/pathway-section.css";



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
            <div className="gradCard" key={graduate._id}>
              <GraduateCard graduate={graduate} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataScienceSection;
