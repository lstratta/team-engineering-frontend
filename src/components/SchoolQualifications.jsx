import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const SchoolQualifications = ({ schooling, serverURL, graduateId, setGraduateUser }) => {

  const getData = async () => {

    await axios.get(serverURL + `graduate/${graduateId}`)
      .then((res) => {
        setGraduateUser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleDelete = async () => {
    await axios
      .delete(serverURL + `graduate/${graduateId}/edit/schoolQualifications/${schooling._id}`)
      .then((res) => {
        getData();
        console.log(res);
      })
  }

  return (
    <tr>
      <td>{schooling.school}</td>
      <td>{schooling.examType}</td>
      <td>{schooling.subject}</td>
      <td>{schooling.grade}</td>
      <td>{schooling.year}</td>
      <td>{schooling.weight}</td>
      <td>{schooling.priority}</td>
      <td>{schooling.description}</td>
      <Button onClick={handleDelete}>Delete</Button>
    </tr>
  )
};

export default SchoolQualifications;
