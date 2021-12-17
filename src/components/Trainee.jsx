import {React, useState, useEffect} from "react";
// import '../css/trainee.css'
import YourProfile from "./YourProfile";
import YourTraining from "./YourTraining";



export default function Trainee(serverURL) {

   // const server_URL = SERVER_URL.SERVER_URL

    console.log("SERVER URL", serverURL.serverURL)
 
    const [graduateUser, setGraduateUser] = useState(null)

    useEffect(() => {

        fetch("http://localhost:3000/graduateUser")
          .then((res) => {
            return res.json();
          })
            .then((data) => {
              setGraduateUser(data)
           
          }); 
    }, [])

    return (
        <div>

            {graduateUser && <YourProfile graduateUser={graduateUser} />}
            {graduateUser && <YourTraining graduateUser={graduateUser} />}
            
        </div>
    )
}