import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const WorkExperience = ({ work, serverURL, graduateId, setGraduateUser }) => {

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
      .delete(serverURL + `graduate/${graduateId}/edit/workExperience/${work._id}`)
      .then((res) => {
        getData();
        console.log(res);
      })
  }

  return (
    <tr>
      <td>{work.type}</td>
      <td>{work.employer}</td>
      <td>{work.position}</td>
      <td>{work.fromDate}</td>
      <td>{work.toDate}</td>
      <td>{work.weight}</td>
      <td>{work.priority}</td>
      <td>{work.description}</td>
      <Button onClick={handleDelete}>Delete</Button>
    </tr>
  )
};

export default WorkExperience;
