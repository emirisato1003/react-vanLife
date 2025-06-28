import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from '../components/HostLayout.module.css';
export default function HostLayout() {
    const navStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    };
    return (
        <div className="host-wrapper">
            <nav className={styles.hostNav}>
                <NavLink style={({ isActive }) => isActive ? navStyle : null} to="." end>Dashboard</NavLink>
                <NavLink style={({ isActive }) => isActive ? navStyle : null} to="income">Income</NavLink>
                <NavLink style={({ isActive }) => isActive ? navStyle : null} to="vans">Vans</NavLink>
                <NavLink style={({ isActive }) => isActive ? navStyle : null} to="reviews">Reviews</NavLink>
            </nav>
            < Outlet />
        </div>
    );
}