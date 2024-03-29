import React, { useState} from "react";
import { useParams } from "react-router-dom";

import { Form, Button, FormLabel } from "react-bootstrap";
import '../../css/modal.css'
import axios from "axios";


const DegreesModal = ({ serverURL, handleClose, setGraduateUser }) => {

  // const setGraduateUserModal = setGraduateUser.setGraduateUser

  const [university, setUniversity] = useState('')
  const [degreeSubject, setDegreeSubject] = useState('');
  const [degreeLevel, setDegreeLevel] = useState('');
  const [grade, setGrade] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [weight, setWeight] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  const { _id } = useParams()

  const getData = async () => {

  await axios.get(serverURL + `graduate/${_id}`)
    .then((res) => {
      setGraduateUser(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const postData = async (addDegree) => {

    await axios
      .post(serverURL + `graduate/${_id}/edit/degrees`, addDegree)
      .then((res) => {
        console.log(res)
        getData();
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const newDegree = {
      university,
      degreeSubject,
      degreeLevel,
      grade,
      fromDate,
      toDate,
      weight,
      priority,
      description
    }

    console.log("NEW DEGREE ", newDegree)

    postData(newDegree)
  }





  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="University"
            required
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </Form.Group>

        <br />
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Degree Subject"
            required
            value={degreeSubject}
            onChange={(e) => setDegreeSubject(e.target.value)}
          />
        </Form.Group>
        <br />

        <Form.Select
          aria-label="Default select example"
          value={degreeLevel}
          onChange={(e) => setDegreeLevel(e.target.value)}
        >
          <option>Degree Level</option>
          <option value="Masters">Masters</option>
          <option value="Bachelors">Bachelors</option>
          <option value="Bachelors-Hons">Bachelors Hons</option>
          <option value="Diploma">Diploma</option>
        </Form.Select>

        <br />
        <Form.Select
          aria-label="Default select example"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        >
          <option>Grade</option>
          <option value="1:1">1:1</option>
          <option value="2:1">2:1</option>
          <option value="2:2">2:2</option>
          <option value="3:0">3:0</option>
        </Form.Select>
        <br />

        <Form.Group className="mb-3">
          <FormLabel>From</FormLabel>
          <Form.Control
            type="date"
            name="from"
            required
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <FormLabel>To</FormLabel>
          <Form.Control
            type="date"
            name="to"
            placeholder="2004"
            required
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </Form.Group>

        <Form.Select
          aria-label="Default select example"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        >
          <option>Weight</option>
          <option value="XL">XL</option>
          <option value="L">L</option>
          <option value="M">M</option>
          <option value="S">S</option>
        </Form.Select>

        <Form.Select
          aria-label="Default select example"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Priority</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </Form.Select>

        <Form.Group className="mb-3">
          <FormLabel>Description</FormLabel>
          <Form.Control
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Button onClick={handleClose} variant="success" type="submit">
          Add New Degree
        </Button>
      </Form>
    </div>
  );
}

export default DegreesModal;