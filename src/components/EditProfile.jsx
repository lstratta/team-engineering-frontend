import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PersonalInfo from "./PersonalInfo";
import PersonalStory from "./PersonalStory";
import Navbar from "./NavBar"
import axios from "axios";


const EditProfile = ({ serverURL }) => {

  const { _id } = useParams()

  const [graduateUser, setGraduateUser] = useState({
    "_id": "",
    "picture": "",
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

    await axios.get(serverURL + `graduate/${_id}`)
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
      <Navbar   id={graduateUser._id} />
      <PersonalInfo graduateUser={graduateUser} serverURL={serverURL} setGraduateUser={setGraduateUser} />
      <PersonalStory graduateUser={graduateUser} setGraduateUser={setGraduateUser} serverURL={serverURL} />

    </div>
  );
}

export default EditProfile;