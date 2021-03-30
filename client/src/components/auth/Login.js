import React, { useState } from 'react';

function Login() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });
    const { email, password } = user;

    const handleChange = e => setUser({...user, [e.target.name]: e.target.value })

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('Login User')
    }
    return (
        <div className='form-container'>
            <h1>Login to your account...</h1>
            <form onSubmit={handleSubmit}>

                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' placeholder='Email' value={email}  onChange={handleChange}/>

                    <label htmlFor='Password'>Password</label>
                    <input type='password' name='password' placeholder='Password' value={password}  onChange={handleChange}/>
                    
                    <input type='submit' value='Login' className='btn btn-primary btn-block'/>
            </form>
        </div>
    )
}

export default Login;