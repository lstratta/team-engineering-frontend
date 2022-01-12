import React from "react";
import '../css/your-profile.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function YourProfile({graduateUser}) {

    
    console.log("GRADUATE USER " ,graduateUser)

    // const graduates = graduateUser
    const school = graduateUser.schoolQualifications.length
    const work = graduateUser.workExperience.length;
    const personala = graduateUser.certificatesAndAwards.length;
    let gradDegree = graduateUser.degrees
    const { _id } = useParams();


    return (

    
     
<div className="your-profile-section">
    <div className="container-fluid">

                <div className="profile-edit">
                    {!graduateUser.picture && <img src="../assets/defaultProfile.jpg" alt="default" className="default-profile-picture"/>}
                    {graduateUser.picture && <img src={graduateUser.picture} alt="Profile" className="default-profile-picture"/>}

                    <div className="profile-edit-section">
                <h2 className="profile">Your Profile</h2>
                <div className="edit-btn-container">
                    <Link to={`/graduate/${_id}/edit`}><button className="edit-btn">Edit</button></Link>
                    </div>
                    </div>
            </div>

            <div className="summary-section">
                <div className="your-info">
                    <p className="personal-info"> Name: {graduateUser.firstName} {graduateUser.lastName}</p>
                    <p className="personal-info"> Personal Email: {graduateUser.personalEmail}</p>
                    <p className="personal-info">Digital Futures Email: {graduateUser.digitalFuturesEmail}</p>
                    <p className="personal-info">GitHub: {graduateUser.gitHub}</p>
                    <p className="personal-info">LinkedIn: {graduateUser.linkedIn}</p>
                    <p className="personal-info">Phone: {graduateUser.phone}</p>
                </div>


                    
                    <div className="personal-story">
                            <div>
                         <div className="container-fluid">       
                    <h2 className="personal-story-summary">Personal Story Summary:</h2>
                    <div className="box2">

                                {  graduateUser.degrees.length === 0 ?  <p className="ps-list">Degree not found</p> :
                                
                              <div >
                                        <p className="ps-list">Degree in {graduateUser.degrees[0].degreeSubject} from {graduateUser.degrees[0].fromDate}</p> 
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