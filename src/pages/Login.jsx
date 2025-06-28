import React, { useState } from 'react';

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginFormData)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    return (
        <div className='login-container'>
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
