import React from "react";
import PersonalInfo from "./PersonalInfo";
import PersonalStory from "./PersonalStory";
import Data from '../example-data.json'


export default function EditProfile() {
    
    const edit = Data.map((editProfile) => {
        return <PersonalInfo
            key={editProfile.id}
            {...editProfile}/>
    })


    return (
      <div>
            {edit}
            <PersonalStory/>
      
      </div>
    );
}