import React from 'react'
import styles from './BlockInfo.module.css'

const BlockInfo = ({ id, postBody, postTitle }) => {
    return (
        <div className={styles.blockInfo}>
            <div className={styles.blockInfo_container}>
                <div className={styles.blockInfo_wrapper}>
                    <h3 className={styles.blockInfo_tittle}>{postTitle}</h3>
                    <p className={styles.blockInfo_info}>{postBody}</p>
                </div>
                <div className={styles.blockInfo_navigation}>
                    <button>Больше</button>
                    <button>Еще</button>
                </div>
            </div>
        </div>
    )
}

export default BlockInfo