import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams, NavLink } from 'react-router-dom';

import styles from './HostVanDetail.module.css';

export default function HostVanDetail() {
    const [hostVansDetail, setHostVansDetail] = useState(null);
    const { id } = useParams();
    const navActive = {
        color: '#161616',
        textDecoration: 'underline'
    };
    const HostVansFetch = async () => {
        try {
            const res = await fetch(`/api/host/vans/${id}`);
            if (!res.ok) {
                throw new Error(res.status);
            }
            const { vans } = await res.json();
            setHostVansDetail(vans[0]);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        HostVansFetch();
    }, []);
    return (
        <div>
            <Link to='..' relative='path' className={styles.backButton}>&larr; <span>Back to all vans</span></Link>
            {hostVansDetail ?
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
                    <Outlet context={{hostVansDetail}} />
                </div>
                : <h2>Loading...</h2>}
        </div>
    );
}
