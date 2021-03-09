import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import { reduxForm } from 'redux-form'
import EditPostModal from './EditPostModal'
import styles from './PostsModalWindow.module.css'

const PostsModalWindow = ({ viewPost, onCloseViewPost, deletPost, editPost, addPost }) => {
    let [newDataPost, setNewDataPost] = useState({
        postTitle: viewPost.title,
        postBody: viewPost.body
    })

    const deletePost = <FontAwesomeIcon icon={faTimes} className={styles.iconDelete} onClick={onCloseViewPost} />
    const onDeletePost = () => {
        deletPost(viewPost.postId);
        onCloseViewPost();
    }
    const onChangeDataPostTittle = (e) => {
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
    const onAddPost = () => {
        addPost(newDataPost.postTitle, newDataPost.postBody)
        onCloseViewPost();
    }

    const EditForm = reduxForm({
        form: 'editForm'
    })(EditPostModal);

    const onSubmit = (formData) => {
        editPost(viewPost.postId, formData.title, formData.body);
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
                    <EditForm onSubmit={onSubmit} viewPost={viewPost} onChangeDataPostTittle={onChangeDataPostTittle} onChangeDataPostBody={onChangeDataPostBody}
                        newDataPost={newDataPost} onEditPost={onEditPost} onCloseViewPost={onCloseViewPost} />}
                {viewPost.trigger == 'ADD' &&
                    <div>
                        <h3>Add new post</h3>
                        <div className={styles.editContainer}>
                            <p>Tittle:</p>
                            <textarea className={styles.editTittleTextarea} onChange={(e) => { onChangeDataPostTittle(e) }} value={newDataPost.postTitle}></textarea>
                            <p>Body:</p>
                            <textarea className={styles.editBodyTextarea} onChange={(e) => { onChangeDataPostBody(e) }} value={newDataPost.postBody}></textarea>
                        </div>
                        <div className={styles.viewModal_navigation}>
                            <button className={styles.viewModal_button} onClick={onAddPost}>Add</button>
                            <button className={styles.viewModal_button} onClick={onCloseViewPost}>Cancel</button>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default PostsModalWindow