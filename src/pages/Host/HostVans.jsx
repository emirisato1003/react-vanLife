import { useEffect, useState } from 'react';
import styles from './HostVans.module.css';
import { getVans } from '../../api';
import { Link } from 'react-router-dom';

export default function HostVans() {
    const [hostVans, setHostVans] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(nullS);
    const HostVansFetch = async () => {
        setLoading(true);
        try {
            const res = await getVans(`/api/host/vans/`);
            const { vans } = await res.json();
            setHostVans(vans);
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
        <>
            <h1>Your Listed Vans</h1>
            {hostVans.map(vans => (
                <div key={vans.id}>
                    <Link to={vans.id} className={styles.vansList}>
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
