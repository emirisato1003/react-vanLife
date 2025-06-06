import React from 'react';
import styles from './HostVanDetail.module.css';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPhoto() {
    const {hostVansDetail} = useOutletContext()
    return (
        <div className={styles.hostVanPhoto}>
            <img src={hostVansDetail.imageUrl} alt={hostVansDetail.name} />
        </div>
    );
}
