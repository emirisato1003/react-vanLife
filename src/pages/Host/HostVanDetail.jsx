import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams, NavLink } from 'react-router-dom';
import { getVans } from '../../api';
import styles from './HostVanDetail.module.css';

export default function HostVanDetail() {
    const [hostVansDetail, setHostVansDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        loadVans();
    }, [id]);

    const loadVans = async () => {
        setLoading(true);
        try {
            const { vans } = await getVans(id ? `/api/host/vans/${id}` : '/api/host/vans');
            setHostVansDetail(vans);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>;
    }

    const navActive = {
        color: '#161616',
        textDecoration: 'underline'
    };
    return (
        <div>
            <Link to='..' relative='path' className={styles.backButton}>&larr; <span>Back to all vans</span></Link>
            {hostVansDetail &&
                <div className={styles.vanDetailContainer}>
                    <div className={styles.vanDetailHeader}>
                        <img src={hostVansDetail.imageUrl} alt={hostVansDetail.name} />
                        <div className={styles.vanInfo}>
                            <span className={`van-type ${hostVansDetail.type} selected`} >{hostVansDetail.type}</span>
                            <h2>{hostVansDetail.name}</h2>
                            <h3>${hostVansDetail.price} <span style={{ fontWeight: '400' }}>/day</span></h3>
                        </div>
                    </div>
                    <nav className={styles.detailsNav}>
                        <NavLink style={({ isActive }) => isActive ? navActive : null} to="." end>Details</NavLink>
                        <NavLink style={({ isActive }) => isActive ? navActive : null} to="pricing">Pricing</NavLink>
                        <NavLink style={({ isActive }) => isActive ? navActive : null} to="photo">Photos</NavLink>
                    </nav>
                    <Outlet context={{ hostVansDetail }} />
                </div>}
        </div>
    );
}
