import React from 'react'
import { Field } from 'redux-form';
import { required } from '../../../fieldLevelValidation/validation';
import styles from './PostsModalWindow.module.css'

export const renderField = ({ input, type, meta: { submitFailed, error, warning }} ) => {
    console.log({input, type, meta: { submitFailed, error, warning }})
    return (
        <div className={styles.inputForm_container}>
            <div>
                <textarea {...input} type={type} className={styles.editTittleTextarea}/>
            </div>
            <div className={styles.inputForm_error}>
                {submitFailed && ((error && <span >{error}</span>) ||
                    (warning && <span className={styles.inputForm_error}>{warning}</span>))}
            </div>
        </div>
    )
};

const EditPostModal = ({viewPost, onChangeDataPostTittle, onChangeDataPostBody,newDataPost, onEditPost, onCloseViewPost, ...props}) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>{viewPost.messages}</h3>
            <div className={styles.editContainer}>
                <p>Tittle:</p>
                <Field className={styles.editTittleTextarea} name='title'
                            component={renderField} validate={[required]}/>
                {/* <textarea className={styles.editTittleTextarea} onChange={(e) => { onChangeDataPostTittle(e) }} value={newDataPost.postTitle}></textarea> */}
                <p>Body:</p>
                <Field className={styles.editBodyTextarea} name='body'
                            component={renderField} validate={[required]}/>
                {/* <textarea className={styles.editBodyTextarea} onChange={(e) => { onChangeDataPostBody(e) }} value={newDataPost.postBody}></textarea> */}
            </div>
            <div className={styles.viewModal_navigation}>
                <button className={styles.viewModal_button}>Edit</button>
                <button className={styles.viewModal_button} onClick={onCloseViewPost}>Cancel</button>
            </div>
        </form>
    )
}

export default EditPostModal