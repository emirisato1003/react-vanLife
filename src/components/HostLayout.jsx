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
        <>
            <nav className={styles.hostNav}>
                <NavLink style={({ isActive }) => isActive ? navStyle : null} to="." end>Dashboard</NavLink>
                <NavLink style={({ isActive }) => isActive ? navStyle : null} to="/host/income">Income</NavLink>
                <NavLink style={({ isActive }) => isActive ? navStyle : null} to="/host/reviews">Reviews</NavLink>
            </nav>
            < Outlet />
        </>
    );
}