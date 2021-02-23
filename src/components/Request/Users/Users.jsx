import React from 'react'
import { useState } from 'react/cjs/react.development'
import UserCard from './UserCard/UserCard'
import styles from './Users.module.css'
import ModalWindow2 from '../ModalWindow2/ModalWindow2'

const Users = ({ users, editUsers }) => {
    let [visibleUsers, setVisibleUsers] = useState(3)

    let userList = users.map((item, index) => {


        if (index < visibleUsers) return <UserCard key={item.id} id={item.id} name={item.name} userName={item.username}
            phone={item.phone} website={item.website} email={item.email}
            address={item.address} company={item.company} editUsers={editUsers}/>
    })
    return (
        <div className={styles.container}>
            <div className={styles.wrapperUserList}>
                <div className={styles.userList}>
                    {userList}
                </div>
                <div className={styles.buttonMoreUsers__wrapper}>
                    { userList[userList.length-1] == undefined && 
                    <button className={styles.buttonMoreUsers} onClick={() => {setVisibleUsers(visibleUsers + 3)}}>More</button>}
                </div>
            </div>
        </div>
    )
}

export default Users