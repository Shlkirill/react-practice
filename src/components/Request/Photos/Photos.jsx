import React, { useState } from 'react'
import AllPhotosAlbums from './AllPhotosAlbums/AllPhotosAlbums';
import styles from './Photos.module.css'

const Photos = ({ albumsList }) => {
    let [viewAlbm, setViewAlbm] = useState(3)

    let arrAllPhotosAlbums = albumsList.map(item => {
        return <AllPhotosAlbums key={item.key} photosList={item.photosList} id={item.id} />
    }).filter((item, index) => {
        return index < viewAlbm
    })

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3 className={styles.tittle}>Gallery</h3>
                <div className={styles.photosAlbum}>
                    {arrAllPhotosAlbums}
                </div>
                <div className={styles.navigations}>
                    {albumsList.length >= viewAlbm && <button className={styles.moreAlbum} onClick={() => { setViewAlbm(viewAlbm + 3) }}>
                        More albms
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default Photos