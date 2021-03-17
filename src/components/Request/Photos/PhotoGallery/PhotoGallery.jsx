import React, { useState } from 'react'
import { NavLink, Route, useHistory } from 'react-router-dom'
import BigPhoto from './BigPhoto/BigPhoto'
import styles from './PhotoGallery.module.css'

const PhotoGallery = (props) => {
    let historyUrl = useHistory();

    let arrPhotosList = props.photosList.map(item => {
        let backgroundImageStyle = {
            backgroundImage: 'url(' + item.url + ')',
            backgroundSize: "cover",
        }
        return (
            <NavLink to={`/request_axios/photos/${props.idAlbum}/${item.id}`} >
                <div className={styles.photo} style={backgroundImageStyle} >

                </div>
            </NavLink>
        )
    })
    return (
        <div className={styles.container}>
            {props.idPhoto && <Route path='/request_axios/:subsection?/:idAlbum/:idPhoto'>
                <BigPhoto photosList={props.photosList} idPhoto={props.idPhoto} idAlbum={props.idAlbum}
                    historyUrl={historyUrl} idAlbum={props.idAlbum} editTitlePhoto={props.editTitlePhoto}
                    deletePhoto={props.deletePhoto}/>
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