import React, { useState, useEffect } from 'react'
import PhotoAlbum from './PhotoAlbum/PhotoAlbum';
import styles from './Photos.module.css'

const Photos = ({ photosList }) => {
    let [viewAlbm, setViewAlbm] = useState(50)
    let counter = 1;
    let photosListFilter = []
    while (counter <= viewAlbm) {

        let arr = photosList
            .filter(item => {
                if (item.albumId == counter) return item
            })
        photosListFilter.push(arr)
        counter++
    }
    let arrPhotoAlbum = photosListFilter.map((item, index) => {
        return <PhotoAlbum photosList={item} id={index} />
    })
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3 className={styles.tittle}>Gallery</h3>
                <div className={styles.photosAlbum}>
                    {arrPhotoAlbum}
                </div>
                <div className={styles.navigations}>
                    <button className={styles.moreAlbum} onClick={()=> {setViewAlbm(viewAlbm + 3)}}>
                        More albms
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Photos