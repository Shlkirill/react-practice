import React from 'react'
import { useState } from 'react/cjs/react.development'
import UserCard from './UserCard/UserCard'
import styles from './Users.module.css'

const Users = ({ users }) => {
    let [visibleUsers, setVisibleUsers] = useState(3)
    let userList = users.map((item, index) => {


        if (index < visibleUsers) return <UserCard key={item.id} id={item.id} name={item.name} userName={item.username}
            phone={item.phone} website={item.website} email={item.email}
            address={item.address} company={item.company} />
    })
    return (
        <div className={styles.container}>
            <div className={styles.wrapperUserList}>
                <div className={styles.userList}>
                    {userList}
                </div>
                <div>
                    <button onClick={() => {setVisibleUsers(visibleUsers + 3)}}>More</button>
                </div>
            </div>
        </div>
    )
}

export default Users