import React, { useState } from "react";
import styles from './UserForm.module.css';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value === "") {
            setFirstNameError("");
        } else if (e.target.value.length < 2) {
            setFirstNameError("First name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value === "") {
            setLastNameError("");
        } else if (e.target.value.length < 2) {
            setLastNameError("Last name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value === "") {
            setEmailError("");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value === "") {
            setPasswordError("");
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value === "") {
            setConfirmPasswordError("");
        } else if (e.target.value !== password) {
            setConfirmPasswordError("Passwords must match!");
        } else {
            setConfirmPasswordError("");
        }
    }

    return(
        <div className={ styles.center }>
            <form onSubmit={ createUser }>

                {
                    firstNameError ?
                    <label style={{color:'red'}}>{ firstNameError }</label> :
                    ""
                }
                <div className={styles.formGroup}>
                    <label>First Name: </label>
                    <input type="text" onChange={ handleFirstName } value={ firstName }/>
                </div>
                

                {
                    lastNameError ?
                    <label style={{color:'red'}}>{ lastNameError }</label> :
                    ""
                }
                <div className={styles.formGroup}>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handleLastName } value={ lastName }/>
                </div>
                
                {
                    emailError ?
                    <label style={{color:'red'}}>{ emailError }</label> :
                    ""
                }
                <div className={styles.formGroup}>
                    <label>Email: </label>
                    <input type="text" onChange={ handleEmail } value={ email }/>
                </div>
                
                {
                    passwordError ?
                    <label style={{color:'red'}}>{ passwordError }</label> :
                    ""
                }
                <div className={styles.formGroup}>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } value={ password }/>
                </div>
                
                {
                    confirmPasswordError ?
                    <label style={{color:'red'}}>{ confirmPasswordError }</label> :
                    ""
                }
                <div className={styles.formGroup}>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ handleConfirmPassword } value={ confirmPassword }/>
                </div>

            </form>
            <h3>Your Form Data</h3>
            <div className={ styles.data }>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPassword }</p>
            </div>
        </div>

    )
}

export default UserForm;