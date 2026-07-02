import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => { getAllEmployees(); }, [])

    const getAllEmployees = () => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    const addNewEmployee = () => {
        navigator('/add-employee');
    }

    const updateEmployee = (id) => {
        navigator(`/edit-employee/${id}`);
    }

    const removeEmployee = (id) => {
        deleteEmployee(id).then((response) => { getAllEmployees() }).catch(err => {
            console.error(err);
        })
    }

    return (
        <div className='container mt-5'>
            <div className='card shadow-sm'>
                <div className='card-body'>

                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <h2 className='card-title mb-0'>List of Employees</h2>
                        <button className='btn btn-primary' onClick={addNewEmployee}>
                            + Add Employee
                        </button>
                    </div>

                    {/* Removed table-responsive wrapper, added 'mobile-table' class */}
                    <table className='table table-striped table-hover table-bordered align-middle mobile-table'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Employee ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.id}>
                                    {/* Added data-labels for mobile view */}
                                    <td data-label="Employee ID">{employee.id}</td>
                                    <td data-label="First Name">{employee.firstName}</td>
                                    <td data-label="Last Name">{employee.lastName}</td>
                                    <td data-label="Email ID">{employee.email}</td>
                                    <td data-label="Actions">
                                        {/* Button Fix: Flexbox layout, reduced height (py-1), matching lengths */}
                                        <div className='d-flex flex-column flex-md-row gap-2 justify-content-md-start justify-content-end'>
                                            <button
                                                className='btn btn-outline-primary btn-sm py-1'
                                                style={{ minWidth: '80px' }}
                                                onClick={() => updateEmployee(employee.id)}>
                                                Update
                                            </button>
                                            <button
                                                className='btn btn-outline-danger btn-sm py-1'
                                                style={{ minWidth: '80px' }}
                                                onClick={() => removeEmployee(employee.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default ListEmployeeComponent