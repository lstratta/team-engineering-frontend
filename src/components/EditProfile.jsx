import React, { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PersonalStory from "./PersonalStory";




export default function EditProfile() {

 const [graduateUser, setGraduateUser] = useState(null);

 useEffect(() => {
   fetch(" http://localhost:3000/graduateUser")
     .then((res) => {
       return res.json();
     })
     .then((data) => {
       setGraduateUser(data);
     });
 }, []);


    
    // const edit = Data.map((editProfile) => {
    //     return <PersonalInfo
    //         key={editProfile.id}
    //         {...editProfile}/>
    // })


    return (
      <div>
        {graduateUser && <PersonalInfo graduateUser={graduateUser} />}
        {graduateUser &&  <PersonalStory graduateUser={graduateUser[0]}/> }
       
      </div>
    );
}