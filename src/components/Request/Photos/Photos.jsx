import React, { useState} from 'react'
import AllPhotosAlbums from './AllPhotosAlbums/AllPhotosAlbums';
import styles from './Photos.module.css'

const Photos = ({ photosList }) => {
    let [viewAlbm, setViewAlbm] = useState(3)

    let photosListFilter = photosList.filter((item, index) => {
        if (index < viewAlbm) return item
    })

    let arrAllPhotosAlbums = photosListFilter.map((item, index) => {
        return <AllPhotosAlbums photosList={item} id={index} />
    })
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3 className={styles.tittle}>Gallery</h3>
                <div className={styles.photosAlbum}>
                    {arrAllPhotosAlbums}
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