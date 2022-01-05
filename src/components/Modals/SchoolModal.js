import React, {useState} from "react";
import { Form, Button, FormLabel } from "react-bootstrap";
import { nanoid } from "nanoid";
import '../../css/modal.css'

const SchoolModal = () => {

    const [school, setSchool] = useState('')
    const [examType, setExamType] = useState('');
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');
    const [year, setYear] = useState('');
    const [weight, setWeight] = useState('');
    const [priority, setPriority] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newSchool = {
            _id: nanoid(),
            school, examType, subject, grade, year, weight, priority, description
        }

        fetch("http://localhost:3000/graduateUser", {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newSchool)
      
        }).then(() => {
            console.log('New school added')
        })
    }


    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="School"
              name="school"
              required
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </Form.Group>

          <br />

          <Form.Select
            aria-label="Default select example"
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
          >
            <option> Exam Type </option>
            <option value="A level">A level</option>
            <option value="AS level">AS Level</option>
            <option value="gcse">GCSE</option>
            <option value="hs diploma">High School Diploma</option>
          </Form.Select>
          <br />

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Form.Group>

          <br />

          <Form.Select
            aria-label="Default select example"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option>Grade</option>
            <option value="A*"> A*</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="U">U</option>
          </Form.Select>

          <br />

          <Form.Group className="mb-3">
            <FormLabel>Year</FormLabel>
            <Form.Control
              type="date"
              name="from"
              required
              value={year}
              onChange={(e) => setYear(e.target.value)}
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

          <Button variant="success" type="submit" >
            Add New School Qualification
          </Button>
        </Form>
      </div>
    );
}

export default SchoolModal;