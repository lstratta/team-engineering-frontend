import React, {useState} from "react";
import { Form, Button, FormLabel } from "react-bootstrap";
import { nanoid } from "nanoid";
import "../../css/modal.css";

const PortfolioModal = () => {

const [title, setTitle] = useState("");
const [URL, setURL] = useState("");
const [year, setYear] = useState("");
const [weight, setWeight] = useState("");
const [priority, setPriority] = useState("");
const [description, setDescription] = useState("");
    
 const handleSubmit = (e) => {
   e.preventDefault();
   const newPortfolio = {
     id: nanoid(), title, URL, year, weight, priority,description,
   };

   fetch("http://localhost:3000/graduateUser", {
     method: "POST",
     mode: "cors",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(newPortfolio),
   }).then(() => {
     console.log("New school added");
   });
 };


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Title"
            name="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <br />

        <Form.Group className="mb-3">
          <Form.Control
            type="URL"
            placeholder="URL"
            name="URL"
            required
            value={URL}
            onChange={(e) => setURL(e.target.value)}
          />
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
          <option value="priority1">1</option>
          <option value="priority2">2</option>
          <option value="priority3">3</option>
          <option value="priority4">4</option>
          <option value="priority5">5</option>
          <option value="priority6">6</option>
          <option value="priority7">7</option>
          <option value="priority8">8</option>
          <option value="priority9">9</option>
          <option value="priority10">10</option>
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

        <Button variant="success" type="submit" block>
          Add New Portfolio
        </Button>
      </Form>
    </div>
  );
};

export default PortfolioModal;
