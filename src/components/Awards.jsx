import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const Awards = ({ award, serverURL, graduateId, setGraduateUser }) => {

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
      .delete(serverURL + `graduate/${graduateId}/edit/certificatesAndAwards/${award._id}`)
      .then((res) => {
        getData();
        console.log(res);
      })
  }

  return (
    <tr>
      <td>{award.type}</td>
      <td>{award.issuer}</td>
      <td>{award.award}</td>
      <td>{award.grade}</td>
      <td>{award.year}</td>
      <td>{award.weight}</td>
      <td>{award.priority}</td>
      <td>{award.description}</td>
      <Button onClick={handleDelete}>Delete</Button>
    </tr>
  )
};

export default Awards;
