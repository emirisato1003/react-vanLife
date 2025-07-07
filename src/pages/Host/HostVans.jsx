import { useState } from 'react';
import styles from './HostVans.module.css';
import { Link, useOutletContext } from 'react-router-dom';


export default function HostVans() {
    const { hostVans, loading, error } = useOutletContext();

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>;
    }
    return (
        <section>
            <h1 className={styles.hostVansTitle}>Your Listed Vans</h1>
            {hostVans.map(vans => (
                <Link key={vans.id} to={vans.id} className={styles.vansList}>
                    <img src={vans.imageUrl} alt={vans.name} />
                    <div>
                        <h2>{vans.name}</h2>
                        <p>${vans.price}/day</p>
                    </div>
                </Link>
            ))}
        </section>
    );
}
