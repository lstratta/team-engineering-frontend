import React from "react";
import '../css/your-profile.css'
import { Link } from "react-router-dom";


export default function YourProfile({graduateUser}) {

    
    const graduates = graduateUser
    const school = graduateUser[0].schoolQualifications.length
    const work = graduateUser[0].workExperience.length;
    const personala = graduateUser[0].certificatesAndAwards.length;
  
    
    return (

    
     
<div className="your-profile-section">
        <div className="container-fluid">

{/*             
               { graduateUser && graduateUser.map(graduate => (
          <div>
                   {
             
                graduate.degrees.map(degree => (
                    <div key={graduate._id}>
                     <p className="ps-list">Degree in {degree.degreeSubject}  from</p> 

                </div>
            ))}
          </div>
               ))} */}
            

            <div className="profile-edit">
                <h2 className="profile">Your Profile</h2>
                <Link to='/EditProfile'><button className="edit-btn">Edit</button></Link> 
            </div>


            <div className="summary-section">
                <div className="your-info">
                    <p className="personal-info"> Name: {graduateUser[0].firstName} {graduateUser[0].lastName}</p>
                    <p className="personal-info"> Personal Email: {graduateUser[0].personalEmail}</p>
                    <p className="personal-info">Digital Futures Email: {graduateUser[0].digitalFuturesEmail}</p>
                    <p className="personal-info">GitHub: {graduateUser[0].gitHub}</p>
                    <p className="personal-info">LinkedIn: {graduateUser[0].linkedIn}</p>
                    <p className="personal-info">Phone: {graduateUser[0].phone}</p>
                </div>



                    <div className="personal-story">
                        <div className="container-sm">
                    <h2 className="personal-story-summary">Personal Story Summary:</h2>
                    <div className="box2">

                       { graduates && graduates.map(graduate => (
                <div key={graduates._id}>
                   {graduate.degrees && graduate.degrees.map(degree => (
                    <div key={graduate._id}>
                           <p className="ps-list">Degree in {degree.degreeSubject}  from { degree.from}</p> 
                    
                    </div>
                   ))}
                            
                    </div>
                    ))}
            
                        
                        <p className="ps-list">{school} Qualifications</p>
                        <p className="ps-list">{work} work experiences</p>
                        <p className="ps-list">{personala} personal achievements</p>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
}