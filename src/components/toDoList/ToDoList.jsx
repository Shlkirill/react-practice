import React from 'react'
import styles from './ToDoList.module.css'
import Task from './task/Task'
import { Field } from 'redux-form'

const renderField = ({ input, label, type }) => (
    <input {...input} type={type} className={styles.inputForm} placeholder='Напишите новую задачу' />
);


const ToDoList = (props) => {
    let result = props.taskList.map((item) => {
        return <Task text={item.text} done={item.done} stageOfDone={props.stageOfDone} id={item.id} deleteTask={props.deleteTask} />
    })
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3 className={styles.tittle}>Лист задач:</h3>
                <div className={styles.todolist}>
                    <form onSubmit={props.handleSubmit} className={styles.formControl}>
                        <Field className={styles.input} name='newTask'
                            component={renderField} type="text" />
                        <button className={styles.addTask}>Добавить</button>
                    </form>
                    {result}
                </div>
            </div>
        </div>
    )
}

export default ToDoList