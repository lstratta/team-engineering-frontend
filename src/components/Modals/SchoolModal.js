import React from "react";
import { Form, Button, FormLabel } from "react-bootstrap";
import '../../css/modal.css'

const SchoolModal = () => {

    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="School"
                        name="school"
                        required
                    />
                </Form.Group>

                <br />

                    <Form.Select aria-label="Default select example">
                    <option> Exam Type </option>
                    <option value="a-level">A level</option>
                    <option value="as-level">AS Level</option>
                    <option value="gcse">GCSE</option>
                    <option value="hs-diploma">High School Diploma</option>
                </Form.Select>
                <br />
                
                  <Form.Group className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        required
                    />
                </Form.Group>
                
                <br />
                
                <Form.Select aria-label="Default select example">
                    <option>Grade</option>
                    <option value="first">  A*</option>
                    <option value="twoOne">A</option>
                    <option value="twoTwo">B</option>
                    <option value="twoTwo">C</option>
                    <option value="third">D</option>
                    <option value="third">E</option>
                    <option value="third">U</option>
                
                </Form.Select>
              
                <br />

                <Form.Group className="mb-3">
                    <FormLabel>Year</FormLabel>
                    <Form.Control type="date" name="from" required />
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
                    <Form.Control type="text" name="description" />
                </Form.Group>

                <Button variant="success" type="submit" block>
                    Add New Qualification
                </Button>
            </Form>

        </div>
    );
}

export default SchoolModal;