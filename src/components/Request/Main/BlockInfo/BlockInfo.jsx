import React, { useState } from 'react'
import styles from './BlockInfo.module.css'

const BlockInfo = ({ id, postBody, postTitle, onViewPost }) => {
    let [backgroundColor, setBackgroundColor] = useState(0)

    const onSetBackgroundColor = () => {
        setBackgroundColor(backgroundColor = backgroundColor + 1)
        if (backgroundColor == 4)  setBackgroundColor(0)
    }

    return (
        <div className={styles.blockInfo
            + ' ' + (backgroundColor == 1 && styles.backgroundRed)
            + ' ' + (backgroundColor == 2 && styles.backgroundGreen)
            + ' ' + (backgroundColor == 3 && styles.backgroundBlue)}>
            <div className={styles.blockInfo_container}>
                <div className={styles.blockInfo_wrapper}>
                    <h3 className={styles.blockInfo_tittle}>{postTitle}</h3>
                    <p className={styles.blockInfo_info}>{postBody}</p>
                </div>
                <div className={styles.blockInfo_navigation}>
                    <button onClick={() => onViewPost(postTitle, postBody)}>Больше</button>
                    <button onClick={onSetBackgroundColor}>Цвет</button>
                </div>
            </div>
        </div>
    )
}

export default BlockInfo