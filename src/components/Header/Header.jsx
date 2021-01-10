import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className={styles.header} >
            <div className={styles.menu_container}>
                <h3>Menu: </h3>
                <ul className={styles.menu}>
                    <li><NavLink to='/toDoList' activeClassName={styles.active}>To Do List</NavLink></li>
                    <li><NavLink to='/practice' activeClassName={styles.active}>Practice</NavLink> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header