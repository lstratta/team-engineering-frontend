import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, FormLabel } from "react-bootstrap";
import { nanoid } from "nanoid";
import "../../css/modal.css";
import axios from "axios";




const PortfolioModal = ({ serverURL, handlePortfolioClose, setGraduateUser }) => {

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [year, setYear] = useState("");
  const [weight, setWeight] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const { _id } = useParams()

  const postData = async (addPortfolio) => {

    await axios
      .post(serverURL + `graduate/${_id}/edit/portfolio`, addPortfolio)
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
    const newPortfolio = {
      title,
      url,
      year,
      weight,
      priority,
      description,
    };



    postData(newPortfolio)
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
            type="text"
            placeholder="URL"
            name="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
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

        <Button onClick={handlePortfolioClose} variant="success" type="submit" >
          Add New Portfolio
        </Button>
      </Form>
    </div>
  );
};

export default PortfolioModal;
