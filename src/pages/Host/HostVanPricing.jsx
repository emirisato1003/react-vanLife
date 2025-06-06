import React from 'react';
import styles from './HostVanDetail.module.css';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPricing() {
    const { hostVansDetail } = useOutletContext();
    return (
        <h3 className={styles.hostVanPrice}>${hostVansDetail.price}<span>/day</span></h3>
    );
}
