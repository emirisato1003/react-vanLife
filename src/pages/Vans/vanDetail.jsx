import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
    const [vanDetail, setVanDetail] = useState(null);
    const params = useParams();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/vans/${params.id}`);
                if (!res.status) {
                    throw new Error(res.status);
                }
                const { vans } = await res.json();
                setVanDetail(vans);
            } catch (err) {
                console.log(err.message);
            }
        })();
    }, [params.id]); // ensure it fetches data whenever the ID changes
    return (
        <div className="van-detail-container">
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