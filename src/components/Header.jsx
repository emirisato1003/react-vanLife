import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { FaCircleUser } from "react-icons/fa6";
export default function Header() {
    return (
        <header>
            <Link className={styles.logo} to="/">#VanLife</Link>
            <nav>
                <NavLink className={({ isActive }) => isActive ? styles.active : null} to="/host">Host</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : null} to="/about">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : null} to="/vans">Vans</NavLink>
                <Link to="login" className={styles.loginLink}><FaCircleUser className={styles.loginIcon}/></Link>
            </nav>
        </header>
    );
}