import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { getVan } from "../../api";

export default function VanDetail() {
    const [vanDetail, setVanDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const location = useLocation();

    const search = location.state?.search || "";
    const filter = location.state?.typeFilter || 'all';

    useEffect(() => {
        const loadDetailVans = async () => {
            setLoading(true);
            try {
                const data = await getVan(id);
                setVanDetail(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadDetailVans();
    }, [id]); // ensure it fetches data whenever the ID changes

    if(loading) return <h1 aria-live="polite">Loading...</h1>
    if(error) return <h1 aria-live="assertive">There is an error: {error}</h1>
    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {filter} vans</span></Link>
            {vanDetail ? (
                <div className="van-detail">
                    <img src={vanDetail.imageUrl} />
                    <i className={`van-type ${vanDetail.type} selected`}>{vanDetail.type}</i>
                    <h2>{vanDetail.name}</h2>
                    <p className="van-price"><span>${vanDetail.price}</span>/day</p>
                    <p>{vanDetail.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    );
}