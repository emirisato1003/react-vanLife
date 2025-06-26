import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

const baseUrl = 'api/vans';

export default function Vans() {
    const [vans, setVans] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const typeFilter = searchParams.get("type");

    useEffect(() => {
        const loadVans = async () => {
            setLoading(true);
            const data = await getVans(baseUrl);
            setVans(data);
            setLoading(false);
        };
        loadVans();
    }, []);

    const displayVans = typeFilter
        ? vans.filter(({ type }) => type === typeFilter)
        : vans;

    const vanElements = displayVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link key={van.id} to={van.id} state={{ search: `?${searchParams.toString()}`, typeFilter }}>
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
    const handleFilter = (key, value) => {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
            return prevParams;
        });
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="van-list-container">
            <h1>Explore out van options</h1>
            <button style={{ color: '#161616' }} onClick={() => handleFilter('type', 'simple')} className={`van-type simple ${typeFilter === 'simple' ? 'selected' : null}`}>simple</button>
            <button style={{ color: '#E17654' }} onClick={() => handleFilter('type', 'luxury')} className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : null}`} > luxury</button >
            <button style={{ color: 'darkgray' }} onClick={() => handleFilter('type', 'rugged')} className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : null}`} > rugged</button >
            {typeFilter && <button onClick={() => handleFilter('type', null)}>Clear Filter</button>}
            <div className="van-list">
                {vanElements}
            </div>
        </div >
    );
}