import React, { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PersonalStory from "./PersonalStory";
import axios from "axios";


const EditProfile = () => {

  const [graduateUser, setGraduateUser] = useState({
    "_id": "",
    "available": "",
    "firstName": "",
    "lastName": "",
    "dateOfBirth": "",
    "gender": "",
    "nationality": "",
    "personality": "",
    "phone": "",
    "linkedIn": "",
    "gitHub": "",
    "personalEmail": "",
    "digitalFuturesEmail": "",
    "degrees": [],
    "schoolQualifications": [],
    "workExperience": [],
    "certificatesAndAwards": [],
    "portfolio": [],
    "personalSummary": "",
    "cohort": "",
    "learningPath": "",
    "trainer": "",
    "trainingFinishDate": ""
  });
  

  const getData = async () => {

    await axios.get("http://localhost:3000/graduateUser")
      .then(res => {
        // console.log("AXIOS RES", res.data[0])
        setGraduateUser(res.data[0])
        // console.log("GRADUATE USER", graduateUser)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {

    getData()

    

  }, []);


    return (
      
      <div>

        <PersonalInfo graduateUser={graduateUser}/>
        <PersonalStory graduateUser={graduateUser}/>

      </div>
    );
}

export default EditProfile;