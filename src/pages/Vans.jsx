import { useEffect, useState } from "react";
import { HiH1 } from "react-icons/hi2";
import clsx from "clsx";

export default function Vans() {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("/api/vans");
                console.log(res.status);
                if (!res.ok) {
                    throw new Error(res.status);
                }
                const vansData = await res.json();
                setVans(vansData.vans);
                console.log(vansData.vans);
            } catch (err) {
                console.log(err.message);
            }
        })();
    }, []);

    const vanElements = vans.map(van => (
        <div key={van.id} className="vans-tile">
            <img src={van.imageUrl} alt={van.name} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    )
    );

    return (
        <div className="van-list-container">
            <h1>Explore out van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
}