import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import EditUserModal from './EditUserModal'
import styles from './UsersModalWindow.module.css'

const UsersModalWindow = (props) => {

    let infoUserObj = {
        id: props.id,
        name: props.name,
        username: props.userName,
        email: props.email,
        website: props.site,
        phone: props.phone,
    }

    const deletePost = <FontAwesomeIcon icon={faTimes} className={styles.iconDelete} onClick={()=> {props.setEditMode(false)}} />

    const onSubmit = (values) => {
        props.editUsers(values)
        props.setEditMode(false)
    }

    const UserEditForm = reduxForm({
        form: 'UserEditForm'
    }) (EditUserModal)

    return (
        <div className={styles.viewModal}>
            <div className={styles.viewModal_wrapper}>
                {deletePost}
                <UserEditForm initialValues={infoUserObj} onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default UsersModalWindow