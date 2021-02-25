import React from 'react'
import styles from './PhotoAlbum.module.css'

const PhotoAlbum = ({ photosList }) => {
    let arr = photosList
        .filter((item, index) => {
            if (index < 4) return item
        })
        .map(item => {
           return <img className={styles.preview} src={item.url} alt=""/>
        })
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.albumCard}>
                    {arr}
                </div>
            </div>
        </div>
    )
}

export default PhotoAlbum