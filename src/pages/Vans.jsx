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
                // .then(res => res.json())
                // .then(data => setVans(data));
            } catch (err) {
                console.log(err.message);
            }
        })();
    }, []);

    return (
        <div className="vans">
            {vans.map(van => {
                const badgeClasses = clsx('vans-card-badge', van.type)
                return (<div key={van.id} className="vans-card">
                    <img src={van.imageUrl} alt={van.name} />
                    <div className="vans-card-details">
                        <div>{van.name}</div>
                        <div>${van.price}<div className="day">/day</div></div>
                    </div>
                    <span className={badgeClasses}>{van.type}</span>
                </div>)
            }
            )}
        </div>
    );
}