import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { reduxForm } from 'redux-form'
import AddPostModal from './AddPostModal'
import EditPostModal from './EditPostModal'
import styles from './PostsModalWindow.module.css'

const PostsModalWindow = ({ viewPost, onCloseViewPost, deletPost, editPost, addPost }) => {
    const deletePost = <FontAwesomeIcon icon={faTimes} className={styles.iconDelete} onClick={onCloseViewPost} />

    const EditPostForm = reduxForm({
        form: 'EditPostForm'
    })(EditPostModal);

    const AddPostForm = reduxForm({
        form: 'AddPostForm'
    })(AddPostModal);

    const onDeletePost = () => {
        deletPost(viewPost.postId);
        onCloseViewPost();
    }

    const onSubmitEditPost = (formData) => {
        editPost(viewPost.postId, formData.title, formData.body);
        onCloseViewPost();
    }
    const onSubmitAddPost = (formData) => {
        addPost(formData.title, formData.body)
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
                    <EditPostForm initialValues={{title: viewPost.title, body: viewPost.body}} onSubmit={onSubmitEditPost} onCloseViewPost={onCloseViewPost} />}
                {viewPost.trigger == 'ADD' &&
                    <AddPostForm onSubmit={onSubmitAddPost} onCloseViewPost={onCloseViewPost}/>}
            </div>
        </div>
    )
}

export default PostsModalWindow