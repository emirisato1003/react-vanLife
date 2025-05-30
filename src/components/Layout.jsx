import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}