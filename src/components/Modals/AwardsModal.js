import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Form, Button, FormLabel } from "react-bootstrap";
import "../../css/modal.css";

const AwardModal = () => {
  const [type, setType] = useState("");
  const [issuer, setIssuer] = useState("");
  const [award, setAward] = useState("");
  const [year, setYear] = useState("");
  const [grade, setGrade] = useState("");
  const [weight, setWeight] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAward = {
      _id: nanoid(),
      type,
      issuer,
      award,
      year,
      grade,
      weight,
      priority,
      description,
    };

    fetch("http://localhost:3000/graduateUser", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAward),
    }).then(() => {
      console.log("New school added");
    });
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
            <option value="Certificates">Certificate</option>
            <option value="Awards">Award</option>
          </Form.Select>
        </Form.Group>

        <br />

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Issuer"
            name="Issuer"
            required
            value={issuer}
            onChange={(e) => setIssuer(e.target.value)}
          />
        </Form.Group>

        <br />

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Award"
            name="Award"
            required
            value={award}
            onChange={(e) => setAward(e.target.value)}
          />
        </Form.Group>

        <br />

        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option> Grade </option>
            <option value="Pass">Pass</option>
            <option value="Merit">Merit</option>
            <option value="Distinction">Distinction</option>
          </Form.Select>
        </Form.Group>

        <br />

        <Form.Group className="mb-3">
          <FormLabel>Year</FormLabel>
          <Form.Control
            type="date"
            name="year"
            required
            value={year}
            onChange={(e) => setYear(e.target.value)}
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

        <Button variant="success" type="submit">
          Add New Certificate/Award
        </Button>
      </Form>
    </div>
  );
};

export default AwardModal;
