import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PersonalInfo from "./PersonalInfo";
import PersonalStory from "./PersonalStory";
import axios from "axios";


const EditProfile = (serverURL) => {

  const serverInfo = serverURL.serverURL

  const { _id } = useParams()

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

    await axios.get(serverInfo + `graduate/${_id}`)
      .then((res) => {
        setGraduateUser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {

    getData()

  }, []);


  return (

    <div>

      <PersonalInfo graduateUser={graduateUser} serverURL={serverInfo} />
      <PersonalStory graduateUser={graduateUser} setGraduateUser={setGraduateUser} serverURL={serverInfo} />

    </div>
  );
}

export default EditProfile;