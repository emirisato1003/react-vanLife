// import { Link, Outlet } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { Link, useOutletContext } from "react-router-dom";
import styles from './Dashboard.module.css';

export default function Dashboard() {
    const { hostVans, loading } = useOutletContext();
    function renderVanElements(vans) {
        const hostVansEls = vans.map((van) => (
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
                <Link to={`vans/${van.id}`}>View</Link>
            </div>
        ));

        return (
            <div className="host-vans-list">
                <section>{hostVansEls}</section>
            </div>
        );
    }
    return (
        <>
            <section className={styles.hostDashboard}>
                <div className="info">
                    <h1>Welcome!</h1>
                    <p>Income last <span>30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to='income'>Details</Link>
            </section>
            <section className="reviewScore">
                <h2>Review score </h2>
                <BsStarFill />
                <p><span>5.0</span>/5</p>
                <Link to='reviews'>Details</Link>
            </section>
            <section className="listedVans">
                <div className="top">
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