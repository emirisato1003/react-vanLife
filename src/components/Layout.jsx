import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Vans from '../pages/Vans/Vans';
import VanDetail from '../pages/Vans/vanDetail';
import Header from './Header';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}