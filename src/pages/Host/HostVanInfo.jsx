import React from 'react';
import styles from './HostVanDetail.module.css';
import { useOutletContext } from 'react-router-dom';

export default function HostVanInfo() {
    const { hostVansDetail } = useOutletContext();
    return (
        <div className={styles.hostVanDetailInfo}>
            <p><b>Name:</b> {hostVansDetail.name}</p>
            <p><b>Category:</b> {hostVansDetail.type}</p>
            <p><b>Description:</b> {hostVansDetail.description}</p>
            <p><b>Visibility:</b> Public</p>
        </div>
    );
}
