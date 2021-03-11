import React from 'react'
import styles from './formsControl.module.css';

export const TextareaField = ({ input, type, meta: {touched, error, warning }, className }) => {
    return (
        <div>
            <div>
                <textarea {...input} type={type} className={className + ' ' + (touched && error && styles.textareaFormError)} />
            </div>
            <div className={styles.formError}>
                {touched  && ((error && <span >{error}</span>) ||
                    (warning && <span className={styles.formError}>{warning}</span>))}
            </div>
        </div>
    )
};

export const InputField = ({ input, type, meta: {touched, error, warning }, className }) => {
    return (
        <div>
            <div>
                <input {...input} type={type} className={className + ' ' + (touched && error && styles.textareaFormError)} />
            </div>
            <div className={styles.formError}>
                {touched  && ((error && <span >{error}</span>) ||
                    (warning && <span className={styles.formError}>{warning}</span>))}
            </div>
        </div>
    )
};