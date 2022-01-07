import React, { useState } from "react";
import "../css/personal-story.css";
import Degree from "./Degree";
import SchoolQualifications from './SchoolQualifications'
import WorkExperience from "./Work";
import Awards from "./Awards";
import Portfolio from "./Portfolio"
import DegreesModal from "./Modals/DegreesModal";
import { Modal, Button } from "react-bootstrap";
import SchoolModal from "./Modals/SchoolModal";
import WorkModal from "./Modals/WorkModal";
import PortfolioModal from "./Modals/PortfolioModal"
import AwardsModal from "./Modals/AwardsModal"



const PersonalStory = ({ graduateUser, serverURL }) => {

  console.log("PERSONAL STORY", serverURL)

  const graduateId = graduateUser._id;
  const degreeRows = graduateUser.degrees.length > 0 && graduateUser.degrees.map((degree, graduateId) => (
    <Degree key={graduateId} degree={degree} />

  ));

  const schoolRows = graduateUser.schoolQualifications.map((schooling, graduateId) => (
    <SchoolQualifications key={graduateId} schooling={schooling} />
  ))

  const workRows = graduateUser.workExperience.map((work, graduateId) => (
    <WorkExperience key={graduateId} work={work} />
  ))

  const awardsRows = graduateUser.certificatesAndAwards.map((award, graduateId) => (
    <Awards key={graduateId} award={award} />
  ))

  const portfolioRows = graduateUser.portfolio.map((portfolio, graduateId) => (
    <Portfolio key={graduateId} portfolio={portfolio} />
  ));

  const [degreeShow, setDegreeShow] = useState(false)
  const handleShow = () => setDegreeShow(true)
  const handleClose = () => setDegreeShow(false)

  const [schoolShow, setSchoolShow] = useState(false)
  const handleSchoolShow = () => setSchoolShow(true)
  const handleSchoolClose = () => setSchoolShow(false)

  const [workShow, setWorkShow] = useState(false);
  const handleWorkShow = () => setWorkShow(true);
  const handleWorkClose = () => setWorkShow(false);

  const [awardsShow, setAwardsShow] = useState(false);
  const handleAwardsShow = () => setAwardsShow(true);
  const handleAwardsClose = () => setAwardsShow(false);

  const [portfolioShow, setPortfolioShow] = useState(false);
  const handlePortfolioShow = () => setPortfolioShow(true);
  const handlePortfolioClose = () => setPortfolioShow(false);



  return (
    <div>
      <div className="ep-personal-story">
        <div>
          <div className="app-container">
            <h2>Degrees</h2>
            <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              Add New Degree
            </Button>
            <table>
              <thead>
                <tr>
                  <th>University</th>
                  <th>Degree Subject</th>
                  <th>Degree Level</th>
                  <th>Grade</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Weight</th>
                  <th>Priority</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>{degreeRows}</tbody>
            </table>
          </div>
        </div>
      </div>
      <br />

      <div className="app-container2">
        <h2>School Qualifications</h2>
        <Button
          onClick={handleSchoolShow}
          className="btn btn-success"
          data-toggle="modal"
        >
          Add New School Qualification
        </Button>
        <table>
          <thead>
            <tr>
              <th>School</th>
              <th>Exam Type</th>
              <th>Subject</th>
              <th>Grade</th>
              <th>Year</th>
              <th>Weight</th>
              <th>Priority</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{schoolRows}</tbody>
        </table>
      </div>

      <div className="app-container3">
        <h2>Work Experience / Positions Held</h2>
        <Button
          onClick={handleWorkShow}
          className="btn btn-success"
          data-toggle="modal"
        >
          Add New Work Experience
        </Button>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Employer or other organisation</th>
              <th>Position</th>
              <th>From</th>
              <th>To</th>
              <th>Weight</th>
              <th>Priority</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{workRows}</tbody>
        </table>
      </div>
      <div className="app-container4">
        <h2>Certificates and Awards</h2>
        <Button
          onClick={handleAwardsShow}
          className="btn btn-success"
          data-toggle="modal"
        >
          Add New Certificates/Awards
        </Button>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Issuer</th>
              <th>Award</th>
              <th>Grade</th>
              <th>Year</th>
              <th>Weight</th>
              <th>Priority</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{awardsRows}</tbody>
        </table>
      </div>

      <div className="app-container5">
        <h2>Portfolio</h2>
        <Button
          onClick={handlePortfolioShow}
          className="btn btn-success"
          data-toggle="modal"
        >
          Add New Portfolio
        </Button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>URL</th>
              <th>Year</th>
              <th>Weight</th>
              <th>Priority</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{portfolioRows}</tbody>
        </table>





        {/* DEGREE MODAL  */}

        <Modal show={degreeShow}>
          <Modal.Header>
            <Modal.Title>Add Degree</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <DegreesModal serverURL={serverURL}  />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>




        {/* SCHOOL QUALIFICATIONS  MODAL  */}
        <Modal show={schoolShow}>
          <Modal.Header>
            <Modal.Title>Add School Qualifications</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <SchoolModal />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleSchoolClose} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* WORK MODAL  */}

        <Modal show={workShow}>
          <Modal.Header>
            <Modal.Title>Add New Work Experience</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <WorkModal />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleWorkClose} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* CERTS MODAL  */}

        <Modal show={awardsShow}>
          <Modal.Header>
            <Modal.Title>Add New Certificate/Award</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <AwardsModal />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleAwardsClose} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* PORTFOLIO MODAL  */}

        <Modal show={portfolioShow}>
          <Modal.Header>
            <Modal.Title>Add New Portfolio</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <PortfolioModal />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handlePortfolioClose} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default PersonalStory;