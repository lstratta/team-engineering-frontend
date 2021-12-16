import React from "react";
import { Form, Button, FormLabel } from "react-bootstrap";
import '../../css/modal.css'

const DegreesModal = () => {


  
    return (
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="University"
              name="university"
              required
            />
          </Form.Group>

          <br />
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Degree Subject"
              name="degreeSubject"
              required
            />
          </Form.Group>
          <br />

          <Form.Select aria-label="Default select example">
            <option> Degree Level</option>
            <option value="masters">Masters</option>
            <option value="bachelors">Bachelors</option>
            <option value="bachelors-hons">Bachelors Hons</option>
            <option value="diploma">Diploma</option>
          </Form.Select>

          <br />
          <Form.Select aria-label="Default select example">
            <option>Grade</option>
            <option value="first">1:1</option>
            <option value="twoOne">2:1</option>
            <option value="twoTwo">2:2</option>
            <option value="third">3:0</option>
          </Form.Select>
          <br />

          <Form.Group className="mb-3">
            <FormLabel>From</FormLabel>
            <Form.Control type="date" name="from" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <FormLabel>To</FormLabel>
            <Form.Control type="date" name="to" required />
          </Form.Group>

          <Form.Select aria-label="Default select example">
            <option>Weight</option>
            <option value="XL">XL</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="S">S</option>
          </Form.Select>

          <Form.Select aria-label="Default select example">
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
            <Form.Control type="text" name="description"/>
          </Form.Group>

          <Button variant="success" type="submit" block>
            Add New Degree
          </Button>
        </Form>

      </div>
    );
}

export default DegreesModal;