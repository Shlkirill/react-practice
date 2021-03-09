import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
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

    let [editInfoUser, setEditInfoUser] = useState(infoUserObj)

    const deletePost = <FontAwesomeIcon icon={faTimes} className={styles.iconDelete} onClick={()=> {props.setEditMode(false)}} />

    let onEditInfoUser = (vaule, id) => {
        let copyEditInfoUser;
        switch (id) {
            case '1':
                copyEditInfoUser = {
                    ...editInfoUser,
                    username: vaule
                }
                setEditInfoUser(copyEditInfoUser)
                return copyEditInfoUser;
            case '2':
                copyEditInfoUser = {
                    ...editInfoUser,
                    name: vaule
                }
                setEditInfoUser(copyEditInfoUser)
                return copyEditInfoUser;
            case '3':
                copyEditInfoUser = {
                    ...editInfoUser,
                    email: vaule
                }
                setEditInfoUser(copyEditInfoUser)
                return copyEditInfoUser;
            case '4':
                copyEditInfoUser = {
                    ...editInfoUser,
                    website: vaule
                }
                setEditInfoUser(copyEditInfoUser)
                return copyEditInfoUser;
            case '5':
                copyEditInfoUser = {
                    ...editInfoUser,
                    phone: vaule
                }
                setEditInfoUser(copyEditInfoUser)
                return copyEditInfoUser;
            default:
                return editInfoUser

        }
    }

    const onPush = () => {
        props.editUsers(editInfoUser)
        props.setEditMode(false)
    }

    return (
        <div className={styles.viewModal}>
            <div className={styles.viewModal_wrapper}>
                {deletePost}
                <div>
                    <h3 className={styles.tittle}>Edit profile</h3>
                    <div className={styles.editItem}>
                        <p>User Name:</p>
                        <input className={styles.input} onChange={(e) => { onEditInfoUser(e.target.value, e.target.id) }} id='1' type="text" maxLength='15' value={editInfoUser.username} />
                    </div>
                    <div className={styles.editItem}>
                        <p>Name:</p>
                        <input className={styles.input} onChange={(e) => { onEditInfoUser(e.target.value, e.target.id) }} id='2' type="text" maxLength='23' value={editInfoUser.name} />
                    </div>
                    <div className={styles.editItem}>
                        <p>Email:</p>
                        <input className={styles.input} onChange={(e) => { onEditInfoUser(e.target.value, e.target.id) }} id='3' type="text" maxLength='24' value={editInfoUser.email} />
                    </div>
                    <div className={styles.editItem}>
                        <p>Website:</p>
                        <input className={styles.input} onChange={(e) => { onEditInfoUser(e.target.value, e.target.id) }} id='4' type="text" maxLength='24' value={editInfoUser.website} />
                    </div>
                    <div className={styles.editItem}>
                        <p>Phone:</p>
                        <input className={styles.input} onChange={(e) => { onEditInfoUser(e.target.value, e.target.id) }} id='5' type="text" maxLength='24' value={editInfoUser.phone} />
                    </div>
                </div>
                <div className={styles.submit_wrapper}>
                    <button className={styles.submit} onClick={onPush}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default UsersModalWindow