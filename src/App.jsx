import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';


import { FaRegCopyright } from "react-icons/fa";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <nav>
          <div className="nav-logo">
            <Link to='/'>#VANLIFE</Link>
          </div>
          <div className="nav-link">
            <Link to='/about'>About</Link>
            <Link to='/vans'>Vans</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <FaRegCopyright className='footer-icon'/>&nbsp;
        2025 #VANLIFE
      </footer>
    </>
  );
}

export default App;
