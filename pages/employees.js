import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import styles from '../pages/Employees.module.css';

const EmployeesPage = () => {
    const [employees, setEmployees] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedEmployee, setEditedEmployee] = useState({
        firstName: '',
        lastName: '',
        department: '',
        startDate: '',
        resignedDate: '',
        gender: '',
        dob: '',
    });

    useEffect(() => {
        const fetchEmployees = async () => {
            const { data, error } = await supabase.from('employees').select('*');
            if (error) {
                console.error('Error fetching employees from Supabase:', error.message);
            } else {
                setEmployees(data);
            }
        };

        fetchEmployees();
    }, []);

    const handleEdit = (id) => {
        const employeeToEdit = employees.find((employee) => employee.id === id);
        setEditingId(id);
        setEditedEmployee({ ...employeeToEdit });
    };

    const handleSaveEdit = async () => {
        try {
            const { data, error } = await supabase
                .from('employees')
                .update(editedEmployee)
                .eq('id', editingId);
            if (error) {
                console.error('Error updating employee:', error.message);
            } else {
                const updatedEmployees = employees.map((employee) =>
                    employee.id === editingId ? editedEmployee : employee
                );
                setEmployees(updatedEmployees);
                setEditingId(null);
                setEditedEmployee({
                    firstName: '',
                    lastName: '',
                    department: '',
                    startDate: '',
                    resignedDate: '',
                    gender: '',
                    dob: '',
                });
            }
        } catch (error) {
            console.error('Error updating employee:', error.message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedEmployee((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Employee List</h1>
            <table className={styles.employeeTable}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Department</th>
                        <th>Start Date</th>
                        <th>Resigned Date</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.department}</td>
                            <td>{employee.startDate}</td>
                            <td>{employee.resignedDate}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.dob}</td>
                            <td>
                                {editingId === employee.id ? (
                                    <>
                                        <button onClick={handleSaveEdit}>Save</button>
                                        <button onClick={() => setEditingId(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <button onClick={() => handleEdit(employee.id)}>Edit</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editingId !== null && (
                <div className={styles.editForm}>
                    <h2>Edit Employee</h2>
                    <input
                        type="text"
                        name="firstName"
                        value={editedEmployee.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={editedEmployee.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                    />
                    <input
                        type="text"
                        name="department"
                        value={editedEmployee.department}
                        onChange={handleInputChange}
                        placeholder="Department"
                    />
                    <input
                        type="date"
                        name="startDate"
                        value={editedEmployee.startDate}
                        onChange={handleInputChange}
                    />
                    <input
                        type="date"
                        name="resignedDate"
                        value={editedEmployee.resignedDate}
                        onChange={handleInputChange}
                    />
                    <select
                        name="gender"
                        value={editedEmployee.gender}
                        onChange={handleInputChange}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input
                        type="date"
                        name="dob"
                        value={editedEmployee.dob}
                        onChange={handleInputChange}
                    />
                </div>
            )}
        </div>
    );
};

export default EmployeesPage;
