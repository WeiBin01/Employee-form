import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import supabase from '../supabaseClient';
import styles from '../pages/Employees.module.css';

const EmployeesPage = () => {
    const [employees, setEmployees] = useState([]);

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
    }, []); // Run once on component mount

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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeesPage;
