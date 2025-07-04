import React from 'react';
import Login from '../pages/Login';
import HostLayout from './HostLayout';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthRequiredLayout() {
    const authenticated = true;
    if (!authenticated) {
        return <Navigate to='/login' state={{ message: "You must login first" }} />;
    }
    return <Outlet />;
}
