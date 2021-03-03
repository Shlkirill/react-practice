import React, { useState } from 'react'
import styles from './BigPhoto.module.css'

const BigPhoto = (props) => {

    let photo = props.photosList.find(item => item.id == +props.idPhoto) || []
    console.log(photo)
    if (photo.length == 0) props.historyUrl.goBack()

    const onRedirect = (target) => {
        if (target.id == 1) props.historyUrl.push(`/request_axios/photos/${props.idAlbum}`)
    }


    return (
        <div className={styles.container} id='1' onClick={(e) => { onRedirect(e.target) }}>
            <div className={styles.wrapper}>
                <div>
                    <button onClick={() => {props.historyUrl.push(`/request_axios/photos/${props.idAlbum}/${+props.idPhoto - 1}`)}}>Back</button>
                </div>
                <div className={styles.modal}>
                    <img src={photo.url} alt="" />
                </div>
                <div>
                    <button onClick={() => {props.historyUrl.push(`/request_axios/photos/${props.idAlbum}/${+props.idPhoto + 1}`)}}>onward</button>
                </div>
            </div>
        </div>
    )
}

export default BigPhoto