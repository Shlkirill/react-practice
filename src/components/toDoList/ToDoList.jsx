import React, { useState } from 'react'
import styles from './ToDoList.module.css'
import Task from './task/Task'
import { Field } from 'redux-form'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const renderField = ({ input, label, type }) => (
    <input {...input} type={type} className={styles.inputForm} placeholder='Напишите новую задачу' />
);

const ToDoList = (props) => {
    const [filterMode, setFilterMode] = useState(1);
    const [inProp, setInProp] = useState(true);

    let changeFilter = (filterNumber) => {
        setFilterMode(filterNumber);
        setInProp(!inProp);
    }
    let undoneTask = props.taskList.filter(item => !item.done)
    let doneTask = props.taskList.filter(item => item.done)
    let allTask = undoneTask.concat(doneTask)
    let resultAllTask = allTask.map((item) => {
        return <Task text={item.text} done={item.done} edit={item.edit}
            stageOfDone={props.stageOfDone} id={item.id}
            deleteTask={props.deleteTask} editTask={props.editTask}
            editTextTask={props.editTextTask} />
    })
    let resultDoneTask = resultAllTask.filter((item) => item.props.done);
    let resultUnDoneTask = resultAllTask.filter((item) => !item.props.done);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3 className={styles.tittle}>Лист задач:</h3>
                <div className={styles.filter}>
                    <p className={filterMode == 1 ? styles.filter_active : ''} onClick={() => { changeFilter(1) }}>Все задачи</p>
                    <p className={filterMode == 2 ? styles.filter_active : ''} onClick={() => { changeFilter(2) }} >Активные задачи</p>
                    <p className={filterMode == 3 ? styles.filter_active : ''} onClick={() => { changeFilter(3) }}>Выполненные задачи</p>
                </div>
                <div className={styles.todolist}>
                    <div className={styles.info}>
                        <p className={styles.info_undone}>Активные задачи: <span>{undoneTask.length}</span> </p>
                        <p className={styles.info_done}>Выполненные задачи: <span>{doneTask.length}</span> </p>
                    </div>
                    <form onSubmit={props.handleSubmit} className={styles.formControl}>
                        <Field className={styles.input} name='newTask'
                            component={renderField} type="text" />
                        <button className={styles.addTask}>Добавить</button>
                    </form>
                    <TransitionGroup in={inProp} timeout={500} classNames={{
                        appearActive: styles.myAppearActive,
                        appearDone: styles.myAppearDone,
                        enterActive: styles.myEnterActive,
                        enterDone: styles.myEnterDone,
                        exit: styles.myExit,
                        exitActive: styles.myExitActive,
                        exitDone: styles.myExitDone
                    }} >
                        <CSSTransition>
                            <div className={styles.hhh}>
                                {filterMode == 1 ? resultAllTask : ''}
                                {filterMode == 2 ? resultUnDoneTask : ''}
                                {filterMode == 3 ? resultDoneTask : ''}
                            </div>
                        </CSSTransition>
                    </TransitionGroup >
                </div>
            </div>
        </div >
    )
}

export default ToDoList