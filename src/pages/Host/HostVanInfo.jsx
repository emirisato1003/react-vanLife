import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanInfo() {
    const context = useOutletContext()
    console.log(context)
    return (
        <div>
            <h2>Host Van info goes here</h2>
        </div>
    );
}
