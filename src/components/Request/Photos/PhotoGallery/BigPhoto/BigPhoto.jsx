import React, { useState } from 'react'
import styles from './BigPhoto.module.css'
import { faEdit, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BigPhoto = (props) => {
    let photo = props.photosList.find(item => item.id == +props.idPhoto) || []

    if (photo.length == 0) props.historyUrl.goBack()

    const onRedirect = (target) => {
        if (target.id == 1) props.historyUrl.push(`/request_axios/photos/${props.idAlbum}`)
    }

    const closeWindow = <FontAwesomeIcon icon={faTimes} className={styles.closeWindow} onClick={() => { }} />
    const editTitle = <FontAwesomeIcon icon={faEdit} className={styles.iconEdit} />
    const deletePhoto = <FontAwesomeIcon icon={faTrash} className={styles.iconDelete} />

    return (
        <div className={styles.container} id='1' onClick={(e) => { onRedirect(e.target) }}>
            <div className={styles.wrapper}>
                <div>
                    <button onClick={() => { props.historyUrl.push(`/request_axios/photos/${props.idAlbum}/${+props.idPhoto - 1}`) }}>Back</button>
                </div>
                <div className={styles.modalPhoto}>
                    <div className={styles.modalPhoto__wrapper}>
                        <img className={styles.photo} src={photo.url} alt="" />
                    </div>
                    <div className={styles.modalPhoto__navigationWrapper}>
                        <p className={styles.title}>{photo.title}</p>
                        <div className={styles.modalPhoto__navigation}>
                            {editTitle}
                            {deletePhoto}
                        </div>
                    </div>
                    {closeWindow}
                </div>
                <div>
                    <button onClick={() => { props.historyUrl.push(`/request_axios/photos/${props.idAlbum}/${+props.idPhoto + 1}`) }}>onward</button>
                </div>
            </div>
        </div>
    )
}

export default BigPhoto