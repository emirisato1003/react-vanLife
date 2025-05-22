import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Vans from '../pages/Vans';
import VanDetail from '../pages/vanDetail';
import Header from './Header';

export default function Layout({ children }) {
    return (
        <BrowserRouter>
            <Header>{children}</Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<VanDetail />} />
            </Routes>
        </BrowserRouter>
    );
}