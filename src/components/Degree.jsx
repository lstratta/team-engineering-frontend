import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";




const Degree = ({ degree, serverURL, graduateID }) => {


  const handleDelete = async () => {
    await axios
      .delete(serverURL + `graduate/${graduateID}/edit/degrees`, { data: { id: degree._id } })
      .then((res) => {
        console.log(`res body` + res);
      })
  }

  return (
    <tr>
      <td>{degree.university}</td>
      <td>{degree.degreeSubject}</td>
      <td>{degree.degreeLevel}</td>
      <td>{degree.grade}</td>
      <td>{degree.fromDate}</td>
      <td>{degree.toDate}</td>
      <td>{degree.weight}</td>
      <td>{degree.priority}</td>
      <td>{degree.description}</td>
      <Button onClick={handleDelete}>Delete</Button>
    </tr>
  )
};

export default Degree;
