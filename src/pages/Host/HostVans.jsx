import { useEffect, useState } from 'react';
import styles from './HostVans.module.css';
import { Link } from 'react-router-dom';

export default function HostVans() {
    const [hostVans, setHostVans] = useState([]);
    const HostVansFetch = async () => {
        try {
            const res = await fetch(`/api/host/vans/`);
            if (!res.ok) {
                throw new Error(res.status);
            }
            const { vans } = await res.json();
            setHostVans(vans);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        HostVansFetch();
    }, []);
    return (
        <>
        <h1>Your Listed Vans</h1>
            {hostVans.map(vans => (
                <div key={vans.id}>
                    <Link to={`/host/vans/${vans.id}`} className={styles.vansList}>
                        <img src={vans.imageUrl} alt={vans.name} />
                        <div>
                            <h2>{vans.name}</h2>
                            <p>${vans.price}/day</p>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    );
}
