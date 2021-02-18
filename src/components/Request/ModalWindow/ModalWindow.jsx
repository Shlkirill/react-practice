import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import styles from './ModalWindow.module.css'

const ModalWindow = ({ viewPost, onCloseViewPost, deletPost, editPost }) => {
    let [newDataPost, setNewDataPost] = useState({
        postTitle: viewPost.title,
        postBody: viewPost.body
    })

    const deletePost = <FontAwesomeIcon icon={faTimes} className={styles.iconDelete} onClick={onCloseViewPost} />
    const onDeletePost = () => {
        deletPost(viewPost.postId);
        onCloseViewPost();
    }
    const onChangeDataPostTittle= (e) => {
        setNewDataPost({
            postTitle: e.target.value,
            postBody: newDataPost.postBody
        })
    }
    const onChangeDataPostBody = (e) => {
        setNewDataPost({
            postTitle: newDataPost.postTitle,
            postBody: e.target.value
        })
    }
    const onEditPost = () => {
        editPost(viewPost.postId, newDataPost.postTitle, newDataPost.postBody);
        onCloseViewPost();
    }
    return (
        <div className={viewPost.show ? styles.viewModal : styles.hide}>
            <div className={styles.viewModal_wrapper}>
                {viewPost.trigger == 'VIEW' && <div>
                    {deletePost}
                    <h3>{viewPost.title}</h3>
                    <p>{viewPost.body}</p>
                </div>}
                {viewPost.trigger == 'DELETE' &&
                    <div>
                        <h3>{viewPost.messages}</h3>
                        <div>
                            <h3>{viewPost.title}</h3>
                            <p>{viewPost.body}</p>
                        </div>
                        <div className={styles.viewModal_navigation}>
                            <button className={styles.viewModal_button} onClick={onDeletePost}>Yes</button>
                            <button className={styles.viewModal_button} onClick={onCloseViewPost}>No</button>
                        </div>
                    </div>}
                {viewPost.trigger == 'EDIT' &&
                    <div>
                        <h3>{viewPost.messages}</h3>
                        <div className={styles.editContainer}>
                            <p>Tittle:</p>
                            <textarea className={styles.editTittleTextarea} onChange={(e) => {onChangeDataPostTittle(e)}} value={newDataPost.postTitle}></textarea>
                            <p>Body:</p>
                            <textarea className={styles.editBodyTextarea} onChange={(e) => {onChangeDataPostBody(e)}} value={newDataPost.postBody}></textarea>
                        </div>
                        <div className={styles.viewModal_navigation}>
                            <button className={styles.viewModal_button} onClick={onEditPost}>Edit</button>
                            <button className={styles.viewModal_button} onClick={onCloseViewPost}>Cancel</button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ModalWindow