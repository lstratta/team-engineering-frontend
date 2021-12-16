import React from "react";
import "../css/personal-story.css";
import Degree from "./Degree";
import SchoolQualifications from './SchoolQualifications'
import WorkExperience from "./Work";
import Awards from "./Awards";
import Portfolio from "./Portfolio"


export default function PersonalStory({ graduateUser }) {
  //   const { degrees } = graduateUser.degrees;
  const graduateId = graduateUser._id;
     const degreeRows = graduateUser.degrees.map((degree, graduateId) => (
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
   
    
    return (
      <div>
        <div className="ep-personal-story">
          <div>
            <div className="app-container">
              <h2>Degrees</h2>
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
                <tbody>
                  {degreeRows}

                  {/* <tr>
                  {graduateUser &&
                    graduateUser.map((graduate) => (
                      <div key={graduateUser._id}>
                        {graduate.degrees &&
                          graduate.degrees.map((degree) => (
                              
                            <div  key={graduate._id}>
                              <td>{degree.university}</td>
                              <td>{degree.degreeSubject}</td>
                              </div>
                           
                             
                            
                          ))}
                            
                      </div>
                    ))}
                </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />

        <div className="app-container2">
          <h2>School Qualifications</h2>
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
          <h2>Certificates and awards</h2>
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
        </div>
      </div>
    );
}
