import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, FormLabel } from "react-bootstrap";
import { nanoid } from "nanoid";
import "../../css/modal.css";
import axios from "axios";

const WorkModal = ({ serverURL, handleWorkClose, setGraduateUser }) => {

  const [type, setType] = useState('');
  const [employer, setEmployer] = useState('');
  const [position, setPosition] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [weight, setWeight] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');


  const { _id } = useParams()

  const postData = async (addWork) => {

    await axios
      .post(serverURL + `graduate/${_id}/edit/workExperience`, addWork)
      .then((res) => {
        console.log(res)
        getData();
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const getData = async () => {

    await axios.get(serverURL + `graduate/${_id}`)
      .then((res) => {
        setGraduateUser(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }




  const handleSubmit = (e) => {
    e.preventDefault();
    const newWork = {
      type,
      employer,
      position,
      fromDate,
      toDate,
      weight,
      priority,
      description,
    };
    console.log(newWork);
    postData(newWork)
  };



  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option> Type </option>
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
          </Form.Select>
        </Form.Group>

        <br />

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Employer or other organisation"
            name="Employer or other organisation"
            required
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
          />
        </Form.Group>
        <br />

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Position"
            name="Position"
            required
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </Form.Group>

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

        <br />

        <Form.Group className="mb-3">
          <FormLabel>To</FormLabel>
          <Form.Control
            type="date"
            name="to"
            required
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </Form.Group>

        <br />

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

        <Button onClick={handleWorkClose} variant="success" type="submit" >
          Add New Work Experience
        </Button>
      </Form>
    </div>
  );
};

export default WorkModal;
