import React, { useState } from 'react';
import styles from './EmployeeForm.module.css';

const AddEmployeePage = () => {
    const [firstName, setFirstName] = useState('');
    // Add state for other form fields

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/addEmployee', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName /* Add other form fields */ }),
            });

            if (!response.ok) {
                throw new Error('Failed to add employee');
            }

            // Redirect or show success message
        } catch (error) {
            console.error('Error adding employee:', error.message);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <div className={styles.formContainer}>
            <h1>Add Employee</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="firstName">First Name:</label>
                    <input
                        className={styles.formInput}
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                {/* Add other form fields similarly */}
                <button className={styles.submitButton} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddEmployeePage;
