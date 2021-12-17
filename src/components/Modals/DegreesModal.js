import React, {useState} from "react";
import { Form, Button, FormLabel } from "react-bootstrap";
import {nanoid} from 'nanoid'
import '../../css/modal.css'


const DegreesModal = () => {


  const [university, setUniversity] = useState('')
  const [degreeSubject, setDegreeSubject] = useState('');
  const [degreeLevel, setDegreeLevel] = useState('');
  const [grade, setGrade] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [weight, setWeight] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const newDegree = {
      id: nanoid(),
   university, degreeSubject, degreeLevel, grade, fromDate, toDate, weight, priority, description
    }

    fetch("http://localhost:3000/graduateUser", {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDegree)
      
    }).then(() => {
      console.log('New degree added')
    })

   
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

          <FormLabel>Degree Level</FormLabel>
          <Form.Select
            aria-label="Default select example"
            value={degreeLevel}
            onChange={(e) => setDegreeLevel(e.target.value)}
          >
            <option value="Masters">Masters</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Bachelors-Hons">Bachelors Hons</option>
            <option value="Diploma">Diploma</option>
          </Form.Select>

          <br />
          <FormLabel>Grade</FormLabel>
          <Form.Select aria-label="Default select example" value={grade} onChange={(e) => setGrade(e.target.value)}>
            <option value="first">1:1</option>
            <option value="twoOne">2:1</option>
            <option value="twoTwo">2:2</option>
            <option value="third">3:0</option>
          </Form.Select>
          <br />

          <Form.Group className="mb-3">
            <FormLabel>From</FormLabel>
            <Form.Control type="date" name="from" required value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <FormLabel>To</FormLabel>
            <Form.Control type="date" name="to" required value={toDate} onChange={(e) => setToDate(e.target.value)}/>
          </Form.Group>

          <Form.Select aria-label="Default select example" value={weight} onChange={(e) => setWeight(e.target.value)}>
            <option>Weight</option>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
          </Form.Select>

          <Form.Select aria-label="Default select example" value={priority} onChange={(e) => setPriority(e.target.value)}>
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
            <Form.Control type="text" name="description"  value={description} onChange={(e) => setDescription(e.target.value)}/>
          </Form.Group>

          <Button variant="success" type="submit" block>
            Add New Degree
          </Button>

        </Form>
      </div>
    );
}

export default DegreesModal;