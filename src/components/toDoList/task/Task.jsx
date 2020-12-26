import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle, faPencilAlt, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './Task.module.css'



const Task = (props) => {
    const [changeTask, setChangeTask] = useState(props.text);

    const onStageOfDone = () => {
        props.stageOfDone(props.id)
    }
    const onDeleteTask = () => {
        props.deleteTask(props.id)
    }
    const onEditTask = () => {
        props.editTask(props.id)
    }
    const onChangeTask = (e) => {
        setChangeTask(e.target.value)
        console.log(changeTask)
    }
    const onEditTextTask = () => {
        props.editTextTask(props.id, changeTask)
        props.editTask(props.id)
        console.log(changeTask, props.text)
    }
    const onNotEditTextTask = () => {
        props.editTextTask(props.id, props.task)
        props.editTask(props.id)
        console.log(changeTask, props.text)
    }
    const checked = <FontAwesomeIcon icon={faCheck} className={styles.checked} onClick={onStageOfDone} />
    const unChecked = <FontAwesomeIcon icon={faCheck} className={styles.unChecked} onClick={onStageOfDone} />
    return (
        <div className={`${styles.containerTask} + ${props.done ? styles.taskDoneAll : ''}`}>
            <div className={styles.taskDone}>
                {props.done ? checked : unChecked}
            </div>
            <div className={styles.task}>
                {props.edit ?
                    <div className={styles.task_edit}>
                        <input className={styles.task_input} type="text" placeholder={props.text}
                            onChange={onChangeTask} value={changeTask} autoFocus={true} />
                    </div> :
                    <div className={styles.task_info}>
                        <div className={styles.task_text}>{props.text}</div>
                        <div className={styles.task_data}>{props.time}<br />{props.date}</div>
                    </div>}
            </div>
            {props.edit ?
                <FontAwesomeIcon icon={faCheckCircle} className={styles.editTask_button} onClick={onEditTextTask} /> :
                <FontAwesomeIcon icon={faPencilAlt} className={styles.edit} onClick={onEditTask} />}
            {props.edit ?
                <FontAwesomeIcon icon={faTimesCircle} className={styles.editTask_TimesButton} onClick={onEditTask} /> :
                <FontAwesomeIcon icon={faTimes} className={styles.times} onClick={onDeleteTask} />}
        </div >
    )
}

export default Task