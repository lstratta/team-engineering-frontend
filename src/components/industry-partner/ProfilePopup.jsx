import React, { useEffect } from "react";
import axios from "axios";
import "../../css/graduate-card.css";
import { useParams } from "react-router-dom";

const ProfilePopup = ({ serverURL, setGraduateUser, graduateUser }) => {

  const school = graduateUser.schoolQualifications.length;
  const work = graduateUser.workExperience.length;


  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState('')
  // const [personalSummary, setPersonalSummary] = useState("");
  // const [degreeSubject, setDegreeSubject] = useState("");
  // const [gitHub, setGitHub] = useState("");


  const { _id } = useParams();

  const ProfileData = async () => {
    await axios
      .get(serverURL + `graduate/${_id}`)
      .then((res) => {
        setGraduateUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    ProfileData()
  }, [])

  return (
    <div>
      <div className="popup-top">

        <div className="image-name">
        <div className="popup-profile-image">
          <img
            src="../assets/df-logo-blue-background.png"
            alt="Digital Futures logo"
          />
        </div>


        <h3 className="student-name">
          {graduateUser.firstName} {graduateUser.lastName}
        </h3>
        </div>

        <h6 className="student-summary"> " {graduateUser.personalSummary} " </h6>
      </div>

   
      <div className="popup-info-sections">

      <div className="popup-personal-section " >
        <p><span className="popup-titles">Degree:</span>  {graduateUser.degrees[0].degreeSubject}</p>
        <p><span className="popup-titles">Digital Futures Email:</span> {graduateUser.digitalFuturesEmail}</p>
        <p><span className="popup-titles">Github:</span>  {graduateUser.gitHub}</p>
      </div>

      <div className="popup-training ">
        <p><span className="popup-titles">Cohort:</span>  {graduateUser.cohort}</p>
        <p><span className="popup-titles">Learning Path:</span> {graduateUser.learningPath}</p>
        <p><span className="popup-titles">Training Finish Date:</span> {graduateUser.trainingFinishDate}</p>
      </div>
      </div>
      

      
<div className="popup-qualifications">
        <p><span className="popup-titles">School Qualifications:</span> {school}</p>
        <p><span className="popup-titles">Work Experience:</span> {work}</p>
        <p><span className="popup-titles">Certs and Awards:</span> {graduateUser.certificatesAndAwards[0].award}</p>
        <p><span className="popup-titles">Portfolio:</span> "{graduateUser.portfolio[0].title}"</p>
      </div>




      


    </div>
  );
}

export default ProfilePopup;