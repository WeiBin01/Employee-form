import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import styles from './EmployeeForm.module.css';
import { supabase } from '../supabaseClient';

const EmployeeForm = () => {
    const router = useRouter();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [department, setDepartment] = useState('');
    const [startDate, setStartDate] = useState('');
    const [resignedDate, setResignedDate] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if all required fields are filled out
        if (!firstName || !lastName || !department || !startDate || !gender || !dob) {
            console.error('Please fill out all required fields');
            return; // Exit the function if any required field is missing
        }
    
        try {
            const response = await fetch('/api/addEmployee', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    department,
                    startDate,
                    resignedDate,
                    gender,
                    dob,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to add employee');
            }
    
            // Redirect to employee list page or show success message
            router.push('/employees');
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
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="department">Department:</label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        placeholder="Enter department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        placeholder="Select start date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="resignedDate">Resigned Date:</label>
                    <input
                        type="date"
                        id="resignedDate"
                        name="resignedDate"
                        placeholder="Select resigned date"
                        value={resignedDate}
                        onChange={(e) => setResignedDate(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="gender">Gender:</label>
                    <input
                        type="text"
                        id="gender"
                        name="gender"
                        placeholder="Enter gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        placeholder="Select date of birth"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
