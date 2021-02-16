import React from 'react'
import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menu_container}>
                <ul className={styles.menu_list}>
                    <li className={styles.menu_item}>Home</li>
                    <li className={styles.menu_item}>Users</li>
                    <li className={styles.menu_item}>Photos</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu