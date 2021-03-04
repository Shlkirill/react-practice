import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styles from './Post.module.css'

const Post = ({ id, postBody, postTitle, onViewPost, cardSizeBig, datePublisher }) => {
    let [backgroundColor, setBackgroundColor] = useState(0)

    const onSetBackgroundColor = () => {
        setBackgroundColor(backgroundColor = backgroundColor + 1)
        if (backgroundColor == 4) setBackgroundColor(0)
    }

    const editPost = <FontAwesomeIcon icon={faEdit} className={styles.iconEdit}
        onClick={() => onViewPost(postTitle, postBody, id, 'EDIT', 'Editing a post')} />
    const deletePost = <FontAwesomeIcon icon={faTrash} className={styles.iconDelete}
        onClick={() => onViewPost(postTitle, postBody, id, 'DELETE', 'Are you sure you want to delete this post?')} />

    return (
        <div className={styles.blockInfo
            + ' ' + (backgroundColor == 1 && styles.backgroundRed)
            + ' ' + (backgroundColor == 2 && styles.backgroundGreen)
            + ' ' + (backgroundColor == 3 && styles.backgroundBlue)
            + ' ' + (cardSizeBig && styles.blockInfoBigCard)}>
            <div className={styles.blockInfo_container}>
                <div className={styles.blockInfo_wrapper}>
                    <div className={styles.blockInfo_tittleWrapper}>
                        <h3 className={styles.blockInfo_tittle}>{postTitle}</h3>
                        <div className={styles.blockInfo_tittleChangeIcon}>
                            {editPost}
                            {deletePost}
                        </div>
                    </div>
                    <p className={styles.blockInfo_info}>{postBody}</p>
                </div>
                <div className={styles.blockInfo_datePublisher}>
                    <p>
                        {datePublisher.time}
                    </p>
                    <p>
                        {datePublisher.date}
                    </p>
                </div>
                <div className={styles.blockInfo_navigation}>
                    <button onClick={() => onViewPost(postTitle, postBody, id, 'VIEW')}>More...</button>
                    <button onClick={onSetBackgroundColor}>Colors</button>
                </div>
            </div>
        </div>
    )
}

export default Post