import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menu_container}>
                <ul className={styles.menu_list}>
                    <li className={styles.menu_item}>
                        <NavLink to='/request_axios/posts' activeClassName={styles.active} className={styles.link}>Posts</NavLink>
                        </li>
                    <li className={styles.menu_item}>
                        <NavLink to='/request_axios/users' activeClassName={styles.active} className={styles.link}>Users</NavLink>
                    </li>
                    <li className={styles.menu_item}>
                        <NavLink to='/request_axios/photos' activeClassName={styles.active} className={styles.link}>Photos</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu