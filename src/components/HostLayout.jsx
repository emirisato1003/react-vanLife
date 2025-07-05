import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from '../components/HostLayout.module.css';
import { getVans } from "../api";
import { useState, useEffect } from "react";
export default function HostLayout() {
    const [hostVans, setHostVans] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navStyle = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    };

    const HostVansFetch = async () => {
        setLoading(true);
        try {
            const data = await getVans('/api/host/vans');
            setHostVans(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        HostVansFetch();
    }, []);
    return (
        <div className="host-wrapper">
            <nav className={styles.hostNav}>
                <NavLink style={({ isActive }) => isActive ? navStyle : null} to="." end>Dashboard</NavLink>
                <NavLink style={({ isActive }) => isActive ? navStyle : null} to="income">Income</NavLink>
                <NavLink style={({ isActive }) => isActive ? navStyle : null} to="vans">Vans</NavLink>
                <NavLink style={({ isActive }) => isActive ? navStyle : null} to="reviews">Reviews</NavLink>
            </nav>
            < Outlet context={{hostVans, loading}} />
        </div>
    );
}