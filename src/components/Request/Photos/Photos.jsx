import React from 'react'
import PhotoAlbum from './PhotoAlbum/PhotoAlbum';
import styles from './Photos.module.css'

const Photos = ({ photosList }) => {
    let counter = 1;
    let photosListFilter = []
    while (counter <= 3) {

        let arr = photosList
            .filter(item => {
                if (item.albumId == counter) return item
            })
        photosListFilter.push(arr)
        counter++
    }
    let arrPhotoAlbum = photosListFilter.map(item => {
        return <PhotoAlbum photosList={item} />
    })
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {arrPhotoAlbum}
            </div>
        </div>
    )
}

export default Photos