import React, { useState } from 'react'
import { NavLink, Route, useHistory } from 'react-router-dom'
import BigPhoto from './BigPhoto/BigPhoto'
import ModalWindowPhoto from './BigPhoto/ModalWindowPhoto'
import styles from './PhotoGallery.module.css'

const PhotoGallery = (props) => {

    let [editMode, setEditMode] = useState({
        mode: false,
        modalMode: ''
    })

    let historyUrl = useHistory();

    let arrPhotosList = props.album.photosList.map(item => {

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
                <BigPhoto photosList={props.album.photosList} idPhoto={props.idPhoto} idAlbum={props.idAlbum}
                    historyUrl={historyUrl} idAlbum={props.idAlbum} editTitlePhoto={props.editTitlePhoto}
                    deletePhoto={props.deletePhoto} editMode={editMode} setEditMode={setEditMode} />
            </Route>}
            <h3 className={styles.tittle}>Album № {props.idAlbum}</h3>
            <div>
                {<button onClick={() => {
                    setEditMode({
                        mode: true,
                        modalMode: 'ADD-PHOTO'
                    })
                }} disabled={props.album.photosList.length >= 20}>Add</button>}
            </div>
            <div className={styles.wrapper}>
                <div className={styles.photos}>
                    {arrPhotosList}
                </div>
                {editMode.mode && <ModalWindowPhoto setEditMode={setEditMode} idAlbum={props.idAlbum}
                    modalMode={editMode.modalMode} addPhoto={props.addPhoto} />}
            </div>
        </div>
    )
}

export default PhotoGallery