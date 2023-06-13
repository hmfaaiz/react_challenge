import React, { useState } from 'react'

import { Table, InputGroup, Form, Col, Row } from "react-bootstrap"

function ListWithinList() {
    const [filter, setFilter] = useState()
    console.log(filter)

    const student = [
        {
            "name": "Dani", "email": "dani@gmail.com", "age": 20,
            "address": [
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
            ]
        },
        {
            "name": "Noman", "email": "noman@gmail.com", "age": 10,
            "address": [
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
            ]
        },
        {
            "name": "Zohaib", "email": "zohaib@gmail.com", "age": 22,
            "address": [
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
            ]
        },
        {
            "name": "David", "email": "david@gmail.com", "age": 15,
            "address": [
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
            ]
        },
        {
            "name": "Shayan", "email": "shay@gmail.com", "age": 30,
            "address": [
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
                { "houseNo": "123", "city": "Karachi", "country": "Pakistan" },
            ]
        },
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


            <Table striped variant='dark'>
                <thead>
                    <tr>
                        <th>S no.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Address</th>
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
                                <td>
                                    <Table  striped="columns" variant='dark'>
                                        <thead>
                                            <tr>
                                                <th>House No.</th>
                                                <th>City</th>
                                                <th>Country</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {
                                                item.address.map((add, i) =>
                                                    <tr key={i}>

                                                        <td>{add.houseNo}</td>
                                                        <td>{add.city}</td>
                                                        <td>{add.country}</td>
                                                    </tr>

                                                )
                                            }
                                        </tbody>
                                    </Table>

                                </td>


                            </tr>
                            : null
                    )}

                </tbody>
            </Table>

        </div>
    )
}

export default ListWithinList
