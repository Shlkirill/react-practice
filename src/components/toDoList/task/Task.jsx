import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle, faPencilAlt, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './Task.module.css'



const Task = (props) => {
    const [changeTask, setChangeTask] = useState(props.text);
    const [editMode, setEditMode] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);

    const onStageOfDone = () => {
        props.stageOfDone(props.id)
    }
    const onDeleteTask = () => {
        props.deleteTask(props.id);
        setEditMode(!editMode)
    }
    const onEditTask = () => {
        setEditMode(!editMode)
    }
    const onChangeTask = (e) => {
        setChangeTask(e.target.value)
    }
    const onEditTextTask = () => {
        props.editTextTask(props.id, changeTask)
        setEditMode(!editMode)
    }
    const onDeleteMode = () => {
        setDeleteMode(!deleteMode)
    }
    const checked = <FontAwesomeIcon icon={faCheck} className={styles.checked} onClick={onStageOfDone} />
    const unChecked = <FontAwesomeIcon icon={faCheck} className={styles.unChecked} onClick={onStageOfDone} />

    return (
        <div className={`${styles.containerTask} + ${props.done ? styles.taskDoneAll : ''}`}>
            <div className={styles.taskDone}>
                {props.done ? checked : unChecked}
            </div>
            <div className={styles.task}>
                {editMode ?
                    <div className={styles.task_edit}>
                        <input className={styles.task_input} type="text" placeholder={props.text}
                            onChange={onChangeTask} value={changeTask} autoFocus={true} />
                    </div> :
                    <div className={styles.task_info}>
                        <div className={styles.task_text}>{props.text}</div>
                        <div className={styles.task_data}>{props.time}<br />{props.date}</div>
                    </div>}
            </div>
            {editMode ?
                <FontAwesomeIcon icon={faCheckCircle} className={styles.editTask_button} onClick={onEditTextTask} /> :
                <FontAwesomeIcon icon={faPencilAlt} className={styles.edit} onClick={onEditTask} />}
            {editMode ?
                <FontAwesomeIcon icon={faTimesCircle} className={styles.editTask_TimesButton} onClick={onEditTask} /> :
                <FontAwesomeIcon icon={faTimes} className={styles.times} onClick={onDeleteMode}/>}
            <div className={deleteMode ? styles.popUpWindow_container : styles.popUpWindow_unShow}>
                <div className={styles.popUpWindow}>
                    <h3>Вы уверены что хотите удалить задачу?</h3>
                    <p>Задача: "{props.text}"</p>
                    <div className={styles.popUpWindow_button}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.editTask_button} onClick={onDeleteTask} />
                        <FontAwesomeIcon icon={faTimesCircle} className={styles.editTask_TimesButton} onClick={onDeleteMode}/>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Task