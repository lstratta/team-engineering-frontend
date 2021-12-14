import React from "react";
import '../css/your-profile.css'


export default function YourProfile({firstName, lastName, digitalFuturesEmail, personalEmail, gitHub, linkedIn, phone, degrees}) {

    


    return (
        <div className="your-profile-section">

            <div className="profile-edit">
                <h2 className="profile">Your Profile</h2>
                <button className="edit-btn">Edit</button>
            </div>


            <div className="summary-section">
                <div className="your-info">
                    <p className="personal-info"> Name: {firstName} {lastName}</p>
                    <p className="personal-info"> Personal Email: {personalEmail}</p>
                    <p className="personal-info">Digital Futures Email: {digitalFuturesEmail}</p>
                    <p className="personal-info">GitHub: {gitHub}</p>
                    <p className="personal-info">LinkedIn: {linkedIn}</p>
                    <p className="personal-info">Phone: {phone}</p>
                </div>



                <div className="personal-story">
                    <h2 className="personal-story-summary">Personal Story Summary:</h2>
                    <div className="box2">
                        <p className="ps-list">Degree in {degrees[1]} from YYY</p>
                        <p className="ps-list">4 school qualifications</p>
                        <p className="ps-list">5 work experiences</p>
                        <p className="ps-list">3 personal achievements</p>
                    </div>
                </div>
            </div>
        </div>
    );
}