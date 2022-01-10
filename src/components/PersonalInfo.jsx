import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";
import "../css/edit-profile.css";
// import PersonalInfoModal from "./Modals/PersonalInfoModal";
// import { Modal, Button } from "react-bootstrap";
// const fileSelectedHandler = ;
// const fileUploadHandler = ;
// const state = ;



export default function PersonalInfo(graduateUser) {
  const graduateUserObject = graduateUser.graduateUser;
  
//   const state = {
//   selectedFile: null
// }
// const fileSelectedHandler = event => {
//   this.setState({
//     selectedFile: event.target.files[0]
//   })
// }

// const fileUploadHandler = () => {
//   axios.post('');
// }

  // console.log("GRADUATE USER OBJ", graduateUserObject)

  // const [personalInfoShow, setPersonalInfoShow] = useState(false);
  // const handlePersonalInfoShow = () => setPersonalInfoShow(true);
  // const handlePersonalInfoClose = () => setPersonalInfoShow(false);

  return (
    <div>
      <div className="ep-personal-info-section">
        <div className="ep-personal-info-summary">
          <div className="ep-personal-info">
            <div className="container-fluid">
              <h1 className="pi-info-header">Personal Information</h1>
              <p>
                {" "}
                Name: {graduateUserObject.firstName}{" "}
                {graduateUserObject.lastName}
              </p>
              <p>
                Digital Futures Email: {graduateUserObject.digitalFuturesEmail}
              </p>
              <p>Github: {graduateUserObject.gitHub}</p>
              <p>LinkedIn: {graduateUserObject.linkedIn}</p>
              <p>Phone: {graduateUserObject.phone}</p>
            </div>
          </div>

          <div className="dropdown-forms">
            <div className="container-fluid">
              <form action="#">
                <select
                  className="pi-dropdown"
                  name="gender"
                  id="gender"
                  defaultValue={"default"}
                >
                  <option value="default" hidden>
                    Gender
                  </option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="nonBinary">Non-Binary</option>
                  <option value="other">Prefer not to say</option>
                </select>

                <br />

                <select
                  className="pi-dropdown"
                  name="nationality"
                  id="nationality"
                  defaultValue={"default"}
                >
                  <option value="default" hidden>
                    Nationality
                  </option>
                  <option value="british">British</option>
                  <option value="American">American</option>
                  <option value="dutch">Dutch</option>
                  <option value="nigerian">Nigerian</option>
                </select>

                <br />

                <select
                  className="pi-dropdown"
                  name="personality-type"
                  id="personality-type"
                  defaultValue={"default"}
                >
                  <option value="default" hidden>
                    Personality Type
                  </option>
                  <option value="estj">ESTJ</option>
                  <option value="entj">ENTJ</option>
                  <option value="intj">INTJ</option>
                  <option value="infj">INFJ</option>
                  <option value="estp">ESTP</option>
                  <option value="enfp">ENFP</option>
                  <option value="istp">ISTP</option>
                  <option value="infp">INFP</option>
                </select>
              </form>
            </div>
          </div>
            
          <form action="#">
            <input
              className="pi-dropdown"
              type="file"
              name="photo"
              id="photo"
              // onChange={this.fileSelectedHandler}
            />
            {/* <button onClick={this.fileUploadHandler}>Upload</button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

// {/* <div>

//   <Button
//     onClick={handlePersonalInfoShow}
//     className="btn btn-success"
//     data-toggle="modal"
//   >
//     Edit Personal Information
//     </Button>
// </div> */}

//           {/* PERSONAL INFO MODAL
//           <Modal show={personalInfoShow}>
//             <Modal.Header>
//               <Modal.Title>Edit Personal Information</Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//               <PersonalInfoModal />
//             </Modal.Body>

//             <Modal.Footer>
//               <Button onClick={handlePersonalInfoClose} variant="secondary">
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal> */}
//         </div>
//         </div>
