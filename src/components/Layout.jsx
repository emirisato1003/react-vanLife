import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Vans from '../pages/Vans';
import VanDetail from '../pages/vanDetail';
import Header from './Header';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}