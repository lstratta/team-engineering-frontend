import "../../css/graduate-card.css"
import React, { useState } from "react";
import ProfilePopup from "./ProfilePopup";
import { Modal, Button } from "react-bootstrap";
import "../../css/modal.css"


const GraduateCard = (graduate) => {

    const graduateUser = graduate.graduate;
    const [profileShow, setProfileShow] = useState(false)
    const handleProfileShow = () => setProfileShow(true)
    const handleProfileClose = () => setProfileShow(false)

  return (
      
      <div className="graduate-card">
        <div className="inner-card">
            <div className="profile-image">
                <img src="../assets/df-logo-blue-background.png" alt="Digital Futures logo" />
            </div>
            <div className="profile-name">
                <h4>{graduateUser.firstName + " " + graduateUser.lastName}</h4>
            </div>
            <div className="student-data">
                <h5 className="summary">" {graduateUser.personalSummary} " </h5>
                <h5>{graduateUser.degrees[0].degreeSubject}</h5>
                <h5>{graduateUser.gitHub}</h5>
            </div>
            <div className="view-profile-button">
                <Button onClick={handleProfileShow}>View Profile</Button>
            </div>

            {/* PROFILE POPUP */}

            <Modal show={profileShow}>
          <Modal.Header>
            <Modal.Title>Profile</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ProfilePopup graduateUser={graduateUser}  />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleProfileClose} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>




        </div>
      </div>
    
    
    
   
    )
}

export default GraduateCard;