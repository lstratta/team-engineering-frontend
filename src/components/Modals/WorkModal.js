import React, {useState} from "react";
import { Form, Button, FormLabel } from "react-bootstrap";
import { nanoid } from "nanoid";
import "../../css/modal.css";

const WorkModal = () => {

  const [type, setType] = useState('');
  const [employer, setEmployer] = useState('');
  const [position, setPosition] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [weight, setWeight] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const newWork = {
        id: nanoid(), type, employer, position, from, to, weight,  priority, description,
      };

      fetch("http://localhost:3000/graduateUser", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWork),
      }).then(() => {
        console.log("New work added");
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
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </Form.Group>

        <br />

        <Form.Group className="mb-3">
          <FormLabel>To</FormLabel>
          <Form.Control
            type="date"
            name="to"
            required
            value={to}
            onChange={(e) => setTo(e.target.value)}
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

        <Button variant="success" type="submit" >
          Add New Work Experience
        </Button>
      </Form>
    </div>
  );
};

export default WorkModal;
