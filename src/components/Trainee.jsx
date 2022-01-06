import {React, useState, useEffect} from "react";
// import '../css/trainee.css'
import YourProfile from "./YourProfile";
import YourTraining from "./YourTraining";
import { useParams } from "react-router-dom";



export default function Trainee(serverURL) {

const {_id} = useParams()

  console.log("Param Value", _id)



   // const server_URL = SERVER_URL.SERVER_URL

    console.log("SERVER URL", serverURL.serverURL)
 
    const [graduateUser, setGraduateUser] = useState(null)

    useEffect(() => {

        fetch(`http://localhost:3000/graduateUser`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
              
            for (let i = 0; i < data.length; i++){
              if (i._id === _id) {
                 setGraduateUser(data)
              } else {
                console.log("User not found")
              }
            }

             
             
           console.log("Grad user data", graduateUser)
          }); 
    }, [])

    return (
        <div>

            {/* {graduateUser && <YourProfile graduateUser={graduateUser} />}
        {graduateUser && <YourTraining graduateUser={graduateUser} />} */}
        
            
        </div>
    )
}