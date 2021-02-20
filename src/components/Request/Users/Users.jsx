import React from 'react'
import UserCard from './UserCard/UserCard'
import styles from './Users.module.css'

const Users = ({ users }) => {

    let userList = users.map(item => {
        return <UserCard key={item.id} id={item.id} name={item.name} userName={item.username}
                        phone={item.phone} website={item.website} email={item.email} 
                        address={item.address} company={item.company}/>
    })
    return (
        <div className={styles.container}>
            <div className={styles.wrapperUserList}>
                {userList}
            </div>
        </div>
    )
}

export default Users