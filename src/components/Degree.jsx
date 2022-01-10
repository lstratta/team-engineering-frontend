import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";




const Degree = ({ degree, serverURL, graduateId, setGraduateUser }) => {

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
    console.log(degree._id);
    await axios
      .delete(serverURL + `graduate/${graduateId}/edit/degrees/${degree._id}`)
      .then((res) => {
        getData();
        console.log(res);
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
