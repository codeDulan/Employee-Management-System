import React from 'react'

function ListEmployeeComponents() {

    const dummyData = [
        {
            "id": 1,
            "firstName": "Tharindu",
            "lastName": "Lakmal",
            "email": "tharindu@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Dulan",
            "lastName": "Anjana",
            "email": "dulan@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Chathura",
            "lastName": "Kumarasingha",
            "email": "chathura@gmail.com"
        }
    ]

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Email ID</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponents