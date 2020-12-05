import React from 'react'
import styles from './ToDoList.module.css'
import Task from './task/Task'

let taskList = ['Сходить в тулает', 'Покушать', 'ffewefw'];



let result = taskList.map((item) => {
    return <Task text={item}/>
})

let onAddTask = () => {
    taskList.push('fwefwefw')
}

const ToDoList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.todolist}>
                {result}
                <div>
                    <input type="text" name="" id="" className={styles.input} />
                    <button className={styles.addTask} onClick={onAddTask}> Add task</button>
                </div>
            </div>
        </div>
    )
}

export default ToDoList