import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import YourProfile from "./YourProfile";
import YourTraining from "./YourTraining";
import Navbar from "./NavBar"
// import '../css/trainee.css'


export default function Trainee( {serverURL} ) {

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

    await axios.get(`${serverURL}graduate/${_id}`)
      .then((res) => {

        setGraduateUser(res.data)

      });
  }

  useEffect(() => {

    getData();

  }, [])

  return (
    <div>
      <Navbar id={graduateUser._id}/>
      {graduateUser && <YourProfile graduateUser={graduateUser} />}
      {graduateUser && <YourTraining graduateUser={graduateUser} />}


    </div>
  )
}