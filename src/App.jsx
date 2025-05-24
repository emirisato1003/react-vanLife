import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Vans from './pages/Vans';
// import VanDetail from './pages/vanDetail';
import Layout from './components/Layout';
import "./server";
import './App.css';

import { FaRegCopyright } from "react-icons/fa";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* <Header>{children}</Header> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
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
