import React, { useState } from 'react'
import styles from './BigPhotoModal.module.css'

const BigPhotoModal = (props) => {
    const onCloseViewBigPhoto = (target) => {
        if (target.id) props.onViweBigPhoto({ viewMode: false })
    }

    return (
        <div className={styles.container} onClick={(e) => { onCloseViewBigPhoto(e.target) }} id='1'>
            <div className={styles.wrapper}>
                <div className={styles.modal}>
                    <img src={props.item.url} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default BigPhotoModal