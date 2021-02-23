import React, { useState } from 'react'
import styles from './ModalWindow2.module.css'

const ModalWindow2 = (props) => {
    let infoUserObj = {
        name: props.name,
        userName: props.userName,
        email: props.email,
        site: props.site,
        phone: props.phone,
    }

    let [editInfoUser, setEditInfoUser] = useState(infoUserObj)

    let onEditInfoUser = (vaule, id) => {
        let copyEditInfoUser;
        switch (id) {
            case '1':
                copyEditInfoUser = {
                    ...editInfoUser,
                    name: vaule
                }
                setEditInfoUser(copyEditInfoUser)
                return copyEditInfoUser;
            case '2':
                copyEditInfoUser = {
                    ...editInfoUser,
                    userName: vaule
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
                    site: vaule
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
    }

    return (
        <div className={styles.viewModal}>
            <div className={styles.viewModal_wrapper}>
                <div>
                    <h3>Редактирование</h3>
                    <input onChange={(e) => { onEditInfoUser(e.target.value, e.target.id) }} id='1' type="text" value={editInfoUser.name} />
                    <input onChange={(e) => { onEditInfoUser(e.target.value, e.target.id) }} id='2' type="text" value={editInfoUser.userName} />
                    <input onChange={(e) => { onEditInfoUser(e.target.value, e.target.id) }} id='3' type="text" value={editInfoUser.email} />
                    <input onChange={(e) => { onEditInfoUser(e.target.value, e.target.id) }} id='4' type="text" value={editInfoUser.site} />
                    <input onChange={(e) => { onEditInfoUser(e.target.value, e.target.id) }} id='5' type="text" value={editInfoUser.phone} />
                </div>
                <div><button onClick={onPush}>Отрпавть</button></div>
            </div>
        </div>
    )
}

export default ModalWindow2