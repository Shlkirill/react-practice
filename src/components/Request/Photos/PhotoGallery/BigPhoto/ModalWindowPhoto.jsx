import react from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './ModalWindowPhoto.module.css'

const EditTitlePhoto = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='title' />
            <button>Ok</button>
        </form>
    )
}


const ModalWindowPhoto = ({ setEditMode, title, id }) => {

    const EditTitlePhotoForm = reduxForm({
        form: 'editTitlePhoto'
    })(EditTitlePhoto)

    const onEditTitle = (value) => {
        console.log(value, id)
        setEditMode(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.modal}>
                    <EditTitlePhotoForm initialValues={{ title }} onSubmit={onEditTitle} onEditTitle={onEditTitle} />
                    <button onClick={() => { setEditMode(false) }}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalWindowPhoto