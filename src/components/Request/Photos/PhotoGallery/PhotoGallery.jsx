import React, { useState } from 'react'
import { NavLink, Route, useHistory } from 'react-router-dom'
import BigPhoto from './BigPhotoModal/BigPhoto'
import styles from './PhotoGallery.module.css'

const PhotoGallery = (props) => {
    let historyUrl = useHistory();

    let arrPhotosList = props.photosList.map(item => {
        return (
            <NavLink to={`/request_axios/photos/${props.idAlbum}/${item.id}`} >
                <div className={styles.photo}  >
                    <img src={item.url} alt="" />
                </div>
            </NavLink>
        )
    })
    return (
        <div className={styles.container}>
            {props.idPhoto && <Route path='/request_axios/:subsection?/:idAlbum/:idPhoto'>
                <BigPhoto photosList={props.photosList} idPhoto={props.idPhoto} 
                historyUrl={historyUrl} idAlbum={props.idAlbum}/>
            </Route>}
            <h3 className={styles.tittle}>Album № {+props.idAlbum + 1}</h3>
            <div className={styles.wrapper}>
                <div className={styles.photos}>
                    {arrPhotosList}
                </div>
            </div>
        </div>
    )
}

export default PhotoGallery