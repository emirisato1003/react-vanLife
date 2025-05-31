import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/vanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import "./server";
import './App.css';

import { FaRegCopyright } from "react-icons/fa";
import HostLayout from './components/HostLayout';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            
            <Route path='vans'>
              <Route index element={<Vans />} />
              <Route path=":id" element={<VanDetail />} />
            </Route>

            <Route path='host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <footer>
        <FaRegCopyright className='footer-icon' />&nbsp;
        2025 #VANLIFE
      </footer>
    </>
  );
}

export default App;
