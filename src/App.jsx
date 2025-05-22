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
      <Layout />
      <footer>
        <FaRegCopyright className='footer-icon' />&nbsp;
        2025 #VANLIFE
      </footer>
    </>
  );
}

export default App;
