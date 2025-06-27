
export const getVans = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        };
    }
    const data = await res.json();
    return data.vans;
};