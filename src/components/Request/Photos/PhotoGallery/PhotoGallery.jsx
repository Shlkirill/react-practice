import React, { useState } from 'react'
import styles from './PhotoGallery.module.css'
import Slider from 'react-slick'

const PhotoGallery = (props) => {


    let arrPhotosList = props.photosList.map(item => {
        return <div className={styles.photo}>
            <img src={item.url} alt="" />
        </div>
    })
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.photos}>
                    {arrPhotosList}
                </div>
            </div>
        </div>
    )
}

export default PhotoGallery