import { BsStarFill } from "react-icons/bs";
import { Link, useOutletContext } from "react-router-dom";
import styles from './Dashboard.module.css';

export default function Dashboard() {
    const { hostVans, loading } = useOutletContext();

    function renderVanElements(vans) {
        const hostVansEls = vans.map((van) => (
            <div className={styles.hostVanSingle} key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className={styles.hostVanInfo}>
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
                <Link to={`vans/${van.id}`}>View</Link>
            </div>
        ));

        return (
            <div className={styles.hostVansList}>
                <section>{hostVansEls}</section>
            </div>
        );
    }
    return (
        <>
            <section className={styles.hostDashboard}>
                <div className={styles.info}>
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to='income'>Details</Link>
            </section>
            <section className={styles.reviewScore}>
                <h2>Review score </h2>
                <BsStarFill className={styles.star} />
                <p><span>5.0</span>/5</p>
                <Link to='reviews'>Details</Link>
            </section>
            <section className={styles.listedVans}>
                <div className={styles.top}>
                    <h2>Your listed vans</h2>
                    <Link to='vans'>View all</Link>
                </div>
                {
                    loading && !hostVans ? <h1>Loading...</h1> : <>{renderVanElements(hostVans)}</>
                }
            </section>
        </>
    );
}