import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle, faPencilAlt, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './Task.module.css'


const Task = (props) => {
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
        props.editTextTask(props.id, e.target.value)
    }
    const onKeyDown = (e) => {
        if (e.code == 'Enter') props.editTask(props.id)
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
                            onChange={onChangeTask} value={props.text} autoFocus={true} onKeyDown={onKeyDown} />
                    </div> :
                    <div className={styles.task_info}>
                        <div className={styles.task_text}>{props.text}</div>
                        <div className={styles.task_data}>{props.time}<br />{props.date}</div>
                    </div>}
            </div>
            {props.edit ?
                <FontAwesomeIcon icon={faCheckCircle} className={styles.editTask_button} onClick={onEditTask} /> :
                <FontAwesomeIcon icon={faPencilAlt} className={styles.edit} onClick={onEditTask} />}
            {props.edit ? null : <FontAwesomeIcon icon={faTimes} className={styles.times} onClick={onDeleteTask}/>}
        </div >
    )
}

export default Task