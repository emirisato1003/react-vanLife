import { useEffect, useState } from 'react';
import styles from './HostVans.module.css';
import { getVans } from '../../api';
import { Link, useParams } from 'react-router-dom';

export default function HostVans() {
    const [hostVans, setHostVans] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const HostVansFetch = async () => {
        setLoading(true);
        try {
            const data = await getVans('/api/host/vans');
            console.log(data);
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

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>;
    }
    return (
        <>
            <h1>Your Listed Vans</h1>
            {hostVans.map(vans => (
                <Link key={vans.id} to={vans.id} className={styles.vansList}>
                    <img src={vans.imageUrl} alt={vans.name} />
                    <div>
                        <h2>{vans.name}</h2>
                        <p>${vans.price}/day</p>
                    </div>
                </Link>
            ))}
        </>
    );
}
