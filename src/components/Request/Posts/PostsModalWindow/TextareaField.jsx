import React from 'react'
import styles from './PostsModalWindow.module.css'

const TextareaField = ({ input, type, meta: { submitFailed, error, warning }, className }) => {
    return (
        <div>
            <div>
                <textarea {...input} type={type} className={className + ' ' + (submitFailed && error && styles.textareaFormError)} />
            </div>
            <div className={styles.formError}>
                {submitFailed && ((error && <span >{error}</span>) ||
                    (warning && <span className={styles.formError}>{warning}</span>))}
            </div>
        </div>
    )
};

export default TextareaField