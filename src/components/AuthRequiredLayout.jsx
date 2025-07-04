import React from 'react';
import Login from '../pages/Login';
import HostLayout from './HostLayout';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function AuthRequiredLayout() {
    const isLoggedIn = localStorage.getItem('loggedin');
    const location = useLocation();

    if (!isLoggedIn) {
        return <Navigate to='/login' state={{ message: "You must login first", from: location.pathname }} replace />;
    }
    return <Outlet />;
}
