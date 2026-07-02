import React, { useEffect, useState } from 'react'
import { addEmployees, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const { id } = useParams();

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(err => {
                console.error(err);
            })
        }
    }, [id])

    const handleFirstName = (evt) => setFirstName(evt.target.value);
    const handleLastName = (evt) => setLastName(evt.target.value);
    const handleEmail = (evt) => setEmail(evt.target.value);

    const saveOrUpdateEmployee = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            const employee = { firstName, lastName, email };
            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(err => {
                    console.error(err);
                })
            } else {
                addEmployees(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(err => {
                    console.error(err);
                })
            }
        }
    }

    const validateForm = () => {
        let valid = true;
        const err = { ...errors }

        if (firstName.trim()) {
            err.firstName = '';
        } else {
            err.firstName = 'First name is required';
            valid = false;
        }

        if (lastName.trim()) {
            err.lastName = '';
        } else {
            err.lastName = 'Last name is required';
            valid = false;
        }

        if (email.trim()) {
            err.email = '';
        } else {
            err.email = 'Email is required';
            valid = false;
        }

        setErrors(err);
        return valid;
    }

    const pageTitle = () => {
        if (id)
            return <h3 className='text-center mb-0 py-2'>Update Employee</h3>
        else
            return <h3 className='text-center mb-0 py-2'>Add Employee</h3>
    }

    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0">
                        {/* Dark Header to match Navbar and Footer */}
                        <div className="card-header bg-dark text-white rounded-top">
                            {pageTitle()}
                        </div>

                        <div className="card-body p-4">
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="firstName" className='form-label fw-semibold'>First Name</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Employee First Name'
                                        name='firstName'
                                        value={firstName}
                                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                        onChange={handleFirstName}
                                    />
                                    {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="lastName" className='form-label fw-semibold'>Last Name</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Employee Last Name'
                                        name='lastName'
                                        value={lastName}
                                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                        onChange={handleLastName}
                                    />
                                    {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="email" className='form-label fw-semibold'>Email Address</label>
                                    <input
                                        type="email"
                                        placeholder='Enter Employee Email'
                                        name='email'
                                        value={email}
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        onChange={handleEmail}
                                    />
                                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                                </div>

                                <button className='btn btn-success w-100 mt-2 py-2 fw-bold shadow-sm' onClick={saveOrUpdateEmployee}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent