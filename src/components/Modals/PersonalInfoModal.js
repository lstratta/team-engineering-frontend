// import React, { useState } from "react";
// import { Form, Button, FormLabel } from "react-bootstrap";
// import { nanoid } from "nanoid";
// import "../../css/modal.css";


// const PersonalInfoModal = ({ setGraduateUser }) => {
//   // const setGraduateUserModal = setGraduateUser.setGraduateUser

//   const [name, setName] = useState("");
//   const [digitalFuturesEmail, setDigitalFuturesEmail] = useState("");
//   const [gitHub, setGitHub] = useState("");
//   const [linkedIn, setLinkedIn] = useState("");
//   const [phone, setPhone] = useState("");
//   const [gender, setGender] = useState("");
//   const [nationality, setNationality] = useState("");
//   const [personalityType, setPersonalityType] = useState("");
 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newPersonalInfo = {
//       _id: nanoid(),
//       name,
//       digitalFuturesEmail,
//       gitHub,
//       phone,
//       gender,
//       linkedIn,
//       nationality,
//       personalityType,
//     };

//     fetch("http://localhost:3000/graduateUser", {
//       method: "PUT",
//       mode: "cors",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newPersonalInfo),
//     }).then(() => {
//       console.log("New degree added");
//     });

//     fetch("http://localhost:3000/graduateUser")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setGraduateUser(data);
//       });
//   };

//   return (
//     <div className="personal-info-modal">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Control
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </Form.Group>

//         <br />
//         <Form.Group className="mb-3">
//           <Form.Control
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={digitalFuturesEmail}
//             onChange={(e) => setDigitalFuturesEmail(e.target.value)}
//           />
//         </Form.Group>
//               <br />
              

//         <Form.Group className="mb-3">
//           <Form.Control
//             type="text"
//             name="gitHub"
//             placeholder="GitHub Email"
//             value={gitHub}
//             onChange={(e) => setGitHub(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Control
//             type="text"
//             name="linkedIn"
//             placeholder="LinkedIn"
//             value={linkedIn}
//             onChange={(e) => setLinkedIn(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Select
//           aria-label="Default select example"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         >
//           <option>Gender</option>
//           <option value="female">Female</option>
//           <option value="male">Male</option>
//           <option value="non-binary">Non-Binary</option>
//           <option value="prefer-not-to-say">Prefer Not To Say</option>
//         </Form.Select>

//         <br />

        

//         <Form.Group className="mb-3">
//           <FormLabel>Phone</FormLabel>
//           <Form.Control
//             type="text"
//             name="phone"
//             required
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Select
//           aria-label="Default select example"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         >
//           <option>Gender</option>
//           <option value="female">Female</option>
//           <option value="male">Male</option>
//           <option value="non-binary">Non-Binary</option>
//           <option value="prefer-not-to-say">Prefer Not To Say</option>
//         </Form.Select>

//         <Form.Select
//           aria-label="Default select example"
//           value={nationality}
//           onChange={(e) => setNationality(e.target.value)}
//         >
//           <option>Nationality</option>
//           <option value="UK">UK</option>
//           <option value="American">American</option>
//           <option value="Dutch">Dutch</option>
//           <option value="Nigerian">Nigerian</option>
//         </Form.Select>

//         <Form.Select
//           aria-label="Default select example"
//           value={personalityType}
//           onChange={(e) => setPersonalityType(e.target.value)}
//         >
//           <option>Personality Type</option>
//           <option value="estj">ESTJ</option>
//           <option value="entj">ENTJ</option>
//           <option value="intj">INTJ</option>
//           <option value="infj">INFJ</option>
//           <option value="estp">ESTP</option>
//           <option value="enfp">ENFP</option>
//           <option value="istp">ISTP</option>
//           <option value="infp">INFP</option>
//         </Form.Select>

//         <Button variant="success" type="submit" block>
//           Edit Personal Information
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default PersonalInfoModal;