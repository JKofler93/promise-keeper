import React, { useState } from 'react';

function Register() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });
    const { name, email, password, passwordConfirmation } = user;

    const handleChange = e => setUser({...user, [e.target.name]: e.target.value })

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('Register User')
    }
    return (
        <div className='form-container'>
            <h1>Register Account</h1>
            <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' placeholder='Name' value={name}  onChange={handleChange}/>

                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' placeholder='Email' value={email}  onChange={handleChange}/>

                    <label htmlFor='Password'>Password</label>
                    <input type='password' name='password' placeholder='Password' value={password}  onChange={handleChange}/>

                    <label htmlFor='Confirm Password'>Confirm Password</label>
                    <input type='password' name='passwordConfirmation' placeholder='Confirm Password' value={passwordConfirmation}  onChange={handleChange}/>
                    
                    <input type='submit' value='Register User' className='btn btn-primary btn-block'/>
            </form>
        </div>
    )
}

export default Register;