import React, { useState } from 'react'

import { Table, InputGroup, Form, Col, Row } from "react-bootstrap"

function Array() {
    const [filter, setFilter] = useState()
    console.log(filter)

    const student = [
        { "name": "Dani", "email": "dani@gmail.com", "age": 20 },
        { "name": "Noman", "email": "noman@gmail.com", "age": 10 },
        { "name": "Zohaib", "email": "zohaib@gmail.com", "age": 22 },
        { "name": "David", "email": "david@gmail.com", "age": 15 },
        { "name": "Shayan", "email": "shay@gmail.com", "age": 30 },
    ]

    // for (let i = 0; i < student.length; i++) {
    //     console.log(student[i])

    // }
    return (
        <div>

            <Row className="m-5">
                <Form.Group as={Col}>
                    <h1>Student Data</h1>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control className="mb-3" onChange={(e) => setFilter(e.target.value)} type="number" placeholder='search age' />
                </Form.Group>
            </Row>


            <Table striped="columns" variant='dark'>
                <thead>
                    <tr>
                        <th>S no.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>

                    {student.map((item, index) =>
                        item.age <= filter ?

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                            </tr>
                            : null
                    )}

                </tbody>
            </Table>

        </div>
    )
}

export default Array
