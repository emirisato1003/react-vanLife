import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return <>
        <Outlet />
        <h1>Dashboard page goes here</h1>
    </>;
}