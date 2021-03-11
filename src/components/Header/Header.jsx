import React, { useState } from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    let [miniMenu, setminiMenu] = useState(true)
    return (
        <div className={styles.header} >
            <div className={styles.menu_container}>
            <FontAwesomeIcon className={styles.bars} icon={faBars} onClick={()=>{setminiMenu(!miniMenu)}}/>
                <ul className={styles.menu + ' ' + (miniMenu && styles.menuHide)}>
                    <li><FontAwesomeIcon className={styles.times} icon={faTimes} onClick={()=>{setminiMenu(!miniMenu)}}/></li>
                    <li><NavLink to='/toDoList' activeClassName={styles.active} className={styles.link}>Лист задач</NavLink></li>
                    <li><NavLink to='/tic_tac_toe' activeClassName={styles.active} className={styles.link}>Крестики <br/>нолики</NavLink> </li>
                    <li><NavLink to='/request_axios/posts' activeClassName={styles.active} className={styles.link}>Практика <br/>AJAX</NavLink> </li>
                    <li><NavLink to='/practice' activeClassName={styles.active} className={styles.link}>Разное</NavLink> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header   