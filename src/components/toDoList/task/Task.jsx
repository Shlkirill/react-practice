import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckDouble, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
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

    const checked = <FontAwesomeIcon icon={faCheck} className={styles.checked} onClick={onStageOfDone} />
    const unChecked = <FontAwesomeIcon icon={faCheck} className={styles.unChecked} onClick={onStageOfDone} />
    return (
        <div className={`${styles.containerTask} + ${props.done ? styles.taskDoneAll : ''}`}>
            <div className={styles.taskDone}>
                {props.done ? checked : unChecked}
            </div>
                <div className={styles.taskText}>
                    {props.edit ?
                        <div className={styles.editTask}>
                            <input className={styles.editTask_input} type="text" placeholder={props.text} />
                            <FontAwesomeIcon icon={faCheckDouble} className={styles.editTask_button} />
                        </div> :
                        props.text}
                </div>
            <FontAwesomeIcon icon={faPencilAlt} className={styles.edit} onClick={onEditTask} />
            <FontAwesomeIcon icon={faTimes} className={styles.times} onClick={onDeleteTask} />
        </div >
    )
}

export default Task