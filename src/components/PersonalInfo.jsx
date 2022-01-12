import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";
import "../css/edit-profile.css";
// import PersonalInfoModal from "./Modals/PersonalInfoModal";
import { Button } from "react-bootstrap";
// const fileSelectedHandler = ;
// const fileUploadHandler = ;
// const state = ;

export default function PersonalInfo({ graduateUser, serverURL, setGraduateUser }) {
  const graduateUserObject = graduateUser;
  const [file64, setFile64] = useState();

  const getData = async () => {

    await axios.get(serverURL + `graduate/${graduateUserObject._id}`)
      .then((res) => {
        setGraduateUser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const fileSelectedHandler = (e) => {
    getBase64(e.target.files[0]);
  }

  const getBase64 = file => {
    return new Promise(resolve => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        // console.log("Called", reader);
        baseURL = reader.result;
        // console.log("BU" + baseURL);
        setFile64(baseURL);
        resolve(baseURL);
      };
      // console.log("FI" + fileInfo);
    });
  };

  const fileUploadHandler = async (e) => {
    e.preventDefault();
    postData(file64);
  }

  const postData = async (file) => {
    await axios
      .post(`http://localhost:5757/graduate/${graduateUserObject._id}/edit/picture`, { fileString: file })
      .then((res) => {
        getData()
      })
      .catch((err) => {
        console.log(err);
      });
  }

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


          <div className="profile-block">
            {!graduateUserObject.picture && <img className="profile-img" src='https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg' alt="default "></img>}
            {graduateUserObject.picture && <img className="profile-img" src={graduateUserObject.picture} alt="profile "></img>}
            <form onSubmit={fileUploadHandler} encType='multipart/form-data'>
              <input
                className="pi-dropdown"
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photo"
                id="photo"
                onChange={fileSelectedHandler}
              />
              <input type="submit"/>
            </form>
          </div>

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
