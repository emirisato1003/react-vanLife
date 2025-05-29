import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from '../Host/HostLayout.module.css'
export default function HostLayout() {
    return (
        <>
            <ul className={styles.hostNav}>
                <li className={styles.hostNavList}><Link to="/host">Dashboard</Link></li>
                <li className={styles.hostNavList}><Link to="/host/income">Income</Link></li>
                <li className={styles.hostNavList}><Link to="/host/vans">Vans</Link></li>
                <li className={styles.hostNavList}><Link to="/host/reviews">Reviews</Link></li>
            </ul>
            < Outlet />
        </>
    );
}