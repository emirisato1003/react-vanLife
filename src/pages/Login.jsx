import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginFormData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const message = location.state?.message;
    return (
        <div className='login-container'>
            {message && <h3>{message}</h3>}
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className='login-form'>
                <input
                    type="email"
                    name='email'
                    placeholder='Email address'
                    value={loginFormData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={loginFormData.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    );
}
