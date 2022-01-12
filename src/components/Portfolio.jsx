import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const Portfolio = ({ portfolio, serverURL, graduateId, setGraduateUser }) => {


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
      .delete(serverURL + `graduate/${graduateId}/edit/portfolio/${portfolio._id}`)
      .then((res) => {
        getData();
        console.log(res);
      })
  }

  return (
    <tr>
      <td>{portfolio.title}</td>
      <td>{portfolio.url}</td>
      <td>{portfolio.year}</td>
      <td>{portfolio.weight}</td>
      <td>{portfolio.priority}</td>
      <td>{portfolio.description}</td>
      <Button onClick={handleDelete} variant="danger" className="delete-btn" >Delete</Button>
    </tr>
  )
};

export default Portfolio;
