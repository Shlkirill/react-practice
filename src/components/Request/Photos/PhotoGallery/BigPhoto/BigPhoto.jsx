import React, { useState } from 'react'
import styles from './BigPhoto.module.css'
import { faChevronLeft, faChevronRight, faEdit, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalWindowPhoto from './ModalWindowPhoto'

const BigPhoto = (props) => {

    let photo = props.photosList.find(item => item.id == props.idPhoto) || []

    if (photo.length == 0) props.historyUrl.goBack()
    
    const onRedirect = (target) => {
        if (target.id == 1 || target.id == 2) props.historyUrl.push(`/request_axios/photos/${props.idAlbum}`)
    }

    const closeWindow = <FontAwesomeIcon icon={faTimes} className={styles.closeWindow} id='2' onClick={(e) => { onRedirect(e.currentTarget) }} />
    const editTitle = <FontAwesomeIcon icon={faEdit} className={styles.iconEdit} onClick={() => {
        props.setEditMode({
            mode: true,
            modalMode: 'EDIT'
        })
    }} />

    const deletePhoto = <FontAwesomeIcon icon={faTrash} className={styles.iconDelete} onClick={() => {
        props.setEditMode({
            mode: true,
            modalMode: 'DELETE'
        })
    }} />

    const arrowLeft = <FontAwesomeIcon icon={faChevronLeft} className={styles.leftArrow}
        onClick={() => { props.historyUrl.push(`/request_axios/photos/${props.idAlbum}/${+props.idPhoto - 1}`) }} />
    const arrowRight = <FontAwesomeIcon icon={faChevronRight} className={styles.rightArrow}
        onClick={() => { props.historyUrl.push(`/request_axios/photos/${props.idAlbum}/${+props.idPhoto + 1}`) }} />

    return (
        <div className={styles.container} id='1' onClick={(e) => { onRedirect(e.target) }}>
            <div className={styles.wrapper}>
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
                {arrowLeft}
                {arrowRight}
            </div>
            {props.editMode.mode && <ModalWindowPhoto setEditMode={props.setEditMode} title={photo.title} id={photo.id}
                editTitlePhoto={props.editTitlePhoto} deletePhoto={props.deletePhoto} modalMode={props.editMode.modalMode}
                idAlbum={props.idAlbum} historyUrl={props.historyUrl}/>}
        </div>
    )
}

export default BigPhoto