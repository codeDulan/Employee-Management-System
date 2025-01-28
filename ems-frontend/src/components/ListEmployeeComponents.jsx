import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponents = () => {

    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

   /*const dummyData = [
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
    ]*/

        function addNewEmployee(){
            navigator('/add-employee')
        }

  return (
    <div className='container-fluid'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2'onClick={addNewEmployee}>Add New Employee</button>
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
                    employees.map(employee =>
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