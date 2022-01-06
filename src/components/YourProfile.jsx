import React from "react";
import '../css/your-profile.css'
import { Link } from "react-router-dom";


export default function YourProfile({graduateUser}) {

    
    const graduates = graduateUser
    const school = graduateUser[0].schoolQualifications.length
    const work = graduateUser[0].workExperience.length;
    const personala = graduateUser[0].certificatesAndAwards.length;
    let gradDegree = graduateUser[0].degrees
    
    return (

    
     
<div className="your-profile-section">
    <div className="container-fluid">

                <div className="profile-edit">
                    
                <h2 className="profile">Your Profile</h2>
                <Link to='/graduate/:_id/edit'><button className="edit-btn">Edit</button></Link>
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
                            <div>
                         <div className="container-fluid">       
                    <h2 className="personal-story-summary">Personal Story Summary:</h2>
                    <div className="box2">

                                {  !graduateUser[0].degrees ?  <p className="ps-list">Degree not found</p> :
                                
                              <div >
                                        <p className="ps-list">Degree in {graduateUser[0].degrees[0].degreeSubject} from {graduateUser[0].degrees[0].from}</p> 
                                    </div>
                                
                                
                                }
                            
                     
                    
                        <p className="ps-list">{school} Qualifications</p>
                        <p className="ps-list">{work} work experiences</p>
                        <p className="ps-list">{personala} personal achievements</p>
                    </div>
                </div>
                    </div>
                    </div>
        </div>
    </div>
</div>
    );
}