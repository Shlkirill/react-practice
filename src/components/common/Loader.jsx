import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.dash + ' ' + styles.uno}></div>
                <div className={styles.dash + ' ' + styles.dos}></div>
                <div className={styles.dash + ' ' + styles.tres}></div>
                <div className={styles.dash + ' ' + styles.cuatro}></div>
            </div>
        </div>
    )
}

export default Loader