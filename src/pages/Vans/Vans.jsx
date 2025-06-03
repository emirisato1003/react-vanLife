import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { HiH1 } from "react-icons/hi2";

export default function Vans() {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");
    const displayVans = typeFilter
        ? vans.filter(({ type }) => type === typeFilter)
        : vans;

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("/api/vans");
                console.log(res.headers);
                if (!res.ok) {
                    throw new Error(res.status);
                }
                const vansData = await res.json();
                setVans(vansData.vans);
            } catch (err) {
                console.log(err.message);
            }
        })();
    }, []);

    const vanElements = displayVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link key={van.id} to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt={van.name} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    )
    );

    return (
        <div className="van-list-container">
            <h1>Explore out van options</h1>
            <button style={{color:'#161616'}} onClick={() => setSearchParams({type: 'simple'})} className="van-type simple">simple</button>
            <button style={{color:'#E17654'}} onClick={() => setSearchParams({type: 'luxury'})} className="van-type luxury">luxury</button>
            <button style={{color:'darkgray'}} onClick={() => setSearchParams({type: 'rugged'})}className="van-type rugged">rugged</button>
            <button onClick={() => setSearchParams({})}>Clear Filter</button>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    );
}