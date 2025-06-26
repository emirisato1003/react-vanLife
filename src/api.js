
export async function getVans(url) {
    const res = await fetch(url);
    const { vans } = await res.json();
    return vans;
}