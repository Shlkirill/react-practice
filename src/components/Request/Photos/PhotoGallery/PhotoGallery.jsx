import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BigPhotoModal from './BigPhotoModal/BigPhotoModal'
import styles from './PhotoGallery.module.css'

const PhotoGallery = (props) => {

    let bigPhoto = {
        item: {},
        viewMode: false
    }

    let [viweBigPhoto, setViweBigPhoto] = useState(bigPhoto)

    const onViweBigPhoto = (item, viewMode) => {
        let copyBigPhoto = {
            ...bigPhoto,
            item,
            viewMode
        }
        setViweBigPhoto(copyBigPhoto)
    }

    let arrPhotosList = props.photosList.map(item => {
        return (
            <NavLink to={`/request_axios/photos/0/${item.id}`} onClick={() => { onViweBigPhoto(item, true) }} >
                <div className={styles.photo}  >
                    <img src={item.url} alt="" />
                </div>
            </NavLink>
        )
    })
    return (
        <div className={styles.container}>
            <h3 className={styles.tittle}>Album № {+props.idAlbum + 1}</h3>
            <div className={styles.wrapper}>
                <div className={styles.photos}>
                    {arrPhotosList}
                </div>
            </div>
            {viweBigPhoto.viewMode && <BigPhotoModal item={viweBigPhoto.item} onViweBigPhoto={onViweBigPhoto} />}
        </div>
    )
}

export default PhotoGallery