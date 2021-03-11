
import React, { useState } from 'react'
import { Field } from 'redux-form'
import styles from './UsersModalWindow.module.css'
import { InputField } from '../../../common/forms/formsControl'
import { required, email, phoneNumber, maxLength20, maxLength25 } from '../../../fieldLevelValidation/validation'

const EditUserModal = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <h3 className={styles.tittle}>Edit profile</h3>
            <div className={styles.editItem}>
                <p>User Name:</p>
                <div className={styles.wrapperInput}>
                    <Field className={styles.input} name='username' component={InputField} validate={[required, maxLength20]} />
                </div>
            </div>
            <div className={styles.editItem}>
                <p>Name:</p>
                <div className={styles.wrapperInput}>
                    <Field className={styles.input} name='name' component={InputField} validate={[required, maxLength20]} />
                </div>
            </div>
            <div className={styles.editItem}>
                <p>Email:</p>
                <div className={styles.wrapperInput}>
                    <Field className={styles.input} name='email' component={InputField} validate={[required, email, maxLength20]} />
                </div>
            </div>
            <div className={styles.editItem}>
                <p>Website:</p>
                <div className={styles.wrapperInput}>
                    <Field className={styles.input} name='website' component={InputField} validate={[required, maxLength20]} />
                </div>
            </div>
            <div className={styles.editItem}>
                <p>Phone:</p>
                <div className={styles.wrapperInput}>
                    <Field className={styles.input} name='phone' component={InputField} validate={[required, phoneNumber]} />
                </div>
            </div>
            <div className={styles.submit_wrapper}>
                <button className={styles.submit} disabled={!props.valid} >Save</button>
            </div>
        </form>
    )
}

export default EditUserModal