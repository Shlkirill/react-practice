import React from 'react'
import styles from './PhotoCard.module.css'

const PhotoCard = (props) => {
    return (
        <div>
            <img src={props.url} alt=""/>
        </div>
    )
}

export default PhotoCard