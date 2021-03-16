import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './AllPhotosAlbums.module.css'

const AllPhotosAlbums = ({ id, photosList }) => {
    let arr = photosList
        .filter((item, index) => {
            if (index < 4) return item
        })
        .map(item => {
            let backgroundImageStyle = {
                backgroundImage: 'url(' + item.url + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }
            return <div className={styles.preview} style={backgroundImageStyle}>  </div>

        })
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <NavLink to={`/request_axios/photos/${id}`}>
                    <div className={styles.albumCard} id={id}>
                        {arr}
                    </div>
                </NavLink>
                <p className={styles.description}>Album № {id + 1}</p>
            </div>
        </div>
    )
}

export default AllPhotosAlbums