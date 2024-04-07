import React, { useState } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeList from '../components/EmployeeList';

const IndexPage = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const addEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    };

    const showMoreInfo = (employee) => {
        setSelectedEmployee(employee);
        // Logic to show more information about the selected employee
    };

    const editEmployee = (employee) => {
        // Logic to edit the selected employee
    };

    const deleteEmployee = (employee) => {
        setEmployees(employees.filter((emp) => emp !== employee));
    };

    return (
        <div>
            <h1>Employee Management System</h1>
            <EmployeeForm addEmployee={addEmployee} />
            <EmployeeList
                employees={employees}
                showMoreInfo={showMoreInfo}
                editEmployee={editEmployee}
                deleteEmployee={deleteEmployee}
            />
            {selectedEmployee && (
                <div>
                    <h2>Employee Details</h2>
                    {/* Display more information about the selected employee */}
                    <p>Name: {selectedEmployee.firstName} {selectedEmployee.lastName}</p>
                    <p>Department: {selectedEmployee.department}</p>
                    {/* Add other details as needed */}
                </div>
            )}
        </div>
    );
};

export default IndexPage;
