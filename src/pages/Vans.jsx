import { useEffect, useState } from "react";
import { HiH1 } from "react-icons/hi2";

export default function Vans() {
    const [vans, setVans] = useState([]);
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data));
    }, []);
    
    return (
        <h1>vans page goes here</h1>
    );
}