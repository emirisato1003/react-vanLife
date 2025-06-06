import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";

export default function VanDetail() {
    const [vanDetail, setVanDetail] = useState(null);
    const { id } = useParams();
    const location = useLocation();
    const search = location.state?.search || "";
    const filter = location.state?.typeFilter || 'all'
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/vans/${id}`);
                if (!res.status) {
                    throw new Error(res.status);
                }
                const { vans } = await res.json();
                setVanDetail(vans);
            } catch (err) {
                console.log(err.message);
            }
        })();
    }, [id]); // ensure it fetches data whenever the ID changes
    console.log(location.state.typeFilter);
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