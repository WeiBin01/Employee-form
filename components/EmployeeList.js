import React from 'react';
import styles from './EmployeeList.module.css'; // Import CSS module

const EmployeeList = ({ employees, showMoreInfo, editEmployee, deleteEmployee }) => {
    return (
        <table className={styles.employeeTable}>
            <thead>
                <tr>
                    <th>S/N</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Full Name</th>
                    <th>Department</th>
                    <th>Start Date</th>
                    <th>Resigned Date</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{`${employee.firstName} ${employee.lastName}`}</td>
                        <td>{employee.department}</td>
                        <td>{employee.startDate}</td>
                        <td>{employee.resignedDate || '-'}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.dob}</td>
                        <td>
                            <button onClick={() => showMoreInfo(employee)}>Show Info</button>
                            <button onClick={() => editEmployee(employee)}>Edit</button>
                            <button onClick={() => deleteEmployee(employee)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeList;
