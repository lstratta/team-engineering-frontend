import React from "react";
import '../css/your-profile.css'


export default function YourProfile() {
    return (
        <div className="your-profile-section">

            <div className="profile-edit">
                <h2 className="profile">Your Profile</h2>
                <button className="edit-btn">Edit</button>
            </div>


            <div className="summary-section">
                <div className="your-info">
                    <p className="personal-info">Name: Cherry Lemon</p>
                    <p className="personal-info">Personal email: cherryl@test.com</p>
                    <p className="personal-info">Digital Futures Email: test@test.com</p>
                    <p className="personal-info">GitHub: hahhjdsiwi</p>
                    <p className="personal-info">LinkedIn: hshsh</p>
                    <p className="personal-info">Phone: 0711556</p>
                </div>



                <div className="personal-story">
                    <h2 className="personal-story-summary">Personal Story Summary:</h2>
                    <div className="box2">
                        <p className="ps-list">Degree in XXX from YYY</p>
                        <p className="ps-list">4 school qualifications</p>
                        <p className="ps-list">5 work experiences</p>
                        <p className="ps-list">3 personal achievements</p>
                    </div>
                </div>
            </div>
        </div>
    );
}