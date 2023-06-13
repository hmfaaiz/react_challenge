import React from 'react'

function Array() {

    const student = [
        { "name": "Dani", "email": "dani@gmail.com", "age": 20 },
        { "name": "Noman", "email": "noman@gmail.com", "age": 10 },
        { "name": "Zohaib", "email": "zohaib@gmail.com", "age": 22 },
        { "name": "David", "email": "david@gmail.com", "age": 15 },
        { "name": "Shayan", "email": "shay@gmail.com", "age": 30 },
    ]
    for (let i = 0; i < student.length; i++) {
        console.log(student[i])

    }
    return (
        <div>
            <h1>Data</h1>
            <table border="2">
                <thead>
                    <tr>
                    <th>S no.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    </tr>
                </thead>

                <tbody>

                    {student.map((item) =>

                        <tr>
                            <td>{1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                        </tr>

                    )}

                </tbody>
            </table>

        </div>
    )
}

export default Array
