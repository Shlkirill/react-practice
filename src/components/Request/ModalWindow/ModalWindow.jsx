import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './ModalWindow.module.css'

const ModalWindow = ({ viewPost, onCloseViewPost }) => {
    console.log(viewPost)
    const deletePost = <FontAwesomeIcon icon={faTimes} className={styles.iconDelete} onClick={onCloseViewPost} />

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
                            <button className={styles.viewModal_button}>Yes</button>
                            <button className={styles.viewModal_button} onClick={onCloseViewPost}>No</button>
                        </div>
                    </div>}
                {viewPost.trigger == 'EDIT' &&
                    <div>
                        <h3>{viewPost.messages}</h3>
                        <div>
                            <textarea name="" id="" cols="30" rows="5" value={viewPost.title}></textarea>
                            <textarea name="" id="" cols="30" rows="5" value={viewPost.body}></textarea>
                        </div>
                        <div className={styles.viewModal_navigation}>
                            <button className={styles.viewModal_button}>Edit</button>
                            <button className={styles.viewModal_button} onClick={onCloseViewPost}>Cancel</button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ModalWindow