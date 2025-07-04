import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const data = await loginUser(loginFormData);
            setError(null);
            localStorage.setItem('loggedin', true);
            navigate(from, { replace: true });
        } catch (err) {
            setError(err);
        } finally {
            setStatus('idle');
        }

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
            {error?.message && <h3>{error.message}</h3>}
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
                <button disabled={status === 'submitting'}>{status === 'submitting' ? 'Logging in...' : 'Login'}</button>
            </form>
        </div>
    );
}
