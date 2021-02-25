import React, { useEffect } from 'react'
import styles from './PhotoAlbum.module.css'

const PhotoAlbum = ({ id, photosList }) => {
    useEffect(() => {
        console.log('Я альбом')
    })
    let arr = photosList
        .filter((item, index) => {
            if (index < 4) return item
        })
        .map(item => {
            return <img className={styles.preview} src={item.url} alt="" />

        })
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.albumCard}>
                    {arr}
                </div>
                <p className={styles.description}>Album № {id + 1}</p>
            </div>
        </div>
    )
}

export default PhotoAlbum