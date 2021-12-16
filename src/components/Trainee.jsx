import {React, useState, useEffect} from "react";
// import '../css/trainee.css'
import YourProfile from "./YourProfile";
import YourTraining from "./YourTraining";



export default function Trainee() {
 
    const [graduateUser, setGraduateUser] = useState(null)

    useEffect(() => {
        fetch(" http://localhost:3000/graduateUser")
          .then((res) => {
            return res.json();
          })
            .then((data) => {
              setGraduateUser(data)
           
          });
       
    }, [])
    // const profile = Data.map((data) => {
    //     return <YourProfile
    //         key={data.id}
    //         {...data}
    //     />
    // })

    // const training = Data.map((train) => {
    //     return <YourTraining
    //         key={train.id}
    //         {...train}
        
    //     />
    // })

    return (
        <div>
            {graduateUser && <YourProfile graduateUser={graduateUser} />}
            {graduateUser && <YourTraining graduateUser={graduateUser} />}
            
        </div>
    )
}