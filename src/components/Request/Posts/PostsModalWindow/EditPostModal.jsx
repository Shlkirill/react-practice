import React from 'react'
import { Field } from 'redux-form';
import { TextareaField } from '../../../common/forms/formsControl';
import {onlySpaces, required } from '../../../fieldLevelValidation/validation';
import styles from './PostsModalWindow.module.css'

const EditPostModal = ({ onCloseViewPost, ...props }) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>Editing a post</h3>
            <div className={styles.editContainer}>
                <p>Tittle:</p>
                <Field className={styles.editTittleTextarea} name='title'
                    component={TextareaField} validate={[required, onlySpaces]}/>
                <p>Body:</p>
                <Field className={styles.editBodyTextarea} name='body'
                    component={TextareaField} validate={[required, onlySpaces]} />
            </div>
            <div className={styles.viewModal_navigation}>
                <button className={styles.viewModal_button}>Edit</button>
                <button className={styles.viewModal_button} onClick={onCloseViewPost}>Cancel</button>
            </div>
        </form>
    )
}

export default EditPostModal