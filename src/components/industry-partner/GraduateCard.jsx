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
  console.log(graduateUser.picture);
  return (

    <div className="graduate-card">
      <div className="inner-card">
        <div className="profile-image">

          {!graduateUser.picture && <img src="../assets/df-logo-blue-background.png" alt="Digital Futures logo" />}
          {graduateUser.picture && <img src={graduateUser.picture} alt="Profile picture" />}

        </div>
        <div className="profile-name">
          <h4>{graduateUser.firstName + " " + graduateUser.lastName}</h4>
        </div>
        <div className="student-data">

          <h5 className="summary">" {graduateUser.personalSummary} " </h5>

          <div className="degree-github">
            <div className="degree-icon">
              <h5> <img src="../assets/graduate-cap.png" alt="graduate cap" /> {graduateUser.degrees[0].degreeSubject}</h5>
            </div>

            <div className="github-icon">
              <h5><img src="../assets/github-logo.png" alt="github icon" /> {graduateUser.gitHub}</h5>
            </div>
          </div>


        </div>
        <div className="view-profile-button">
          <Button onClick={handleProfileShow}>View Profile</Button>
        </div>

        {/* PROFILE POPUP */}

        <Modal show={profileShow} className="industry-modal">
          <Modal.Header>
            <Modal.Title>Score Card</Modal.Title>
          </Modal.Header>

          <Modal.Body  >
            <ProfilePopup graduateUser={graduateUser} />
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