import react from 'react'
import styles from './ModalWindowPhoto.module.css'

const ModalWindowPhoto = ({setEditMode}) => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.modal}>
                    <h3>erwgwgweg</h3>
                    <button onClick={() => {setEditMode(false)}}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default ModalWindowPhoto