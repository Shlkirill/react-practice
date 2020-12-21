import React from 'react'
import ToDoList from './ToDoList'
import { connect } from 'react-redux'
import { addTaskAC, stageOfDoneAC, deleteTaskAC } from '../Redux/store'
import { reduxForm } from 'redux-form';

const ToDoListForm = reduxForm({
    form: 'newTask'
})(ToDoList);



const ToDoListContainer = (props) => {
    const onSubmit = (formData) => {
        props.addTask(formData.newTask) 
        formData.newTask = ''
    }
    return (
        <ToDoListForm onSubmit={onSubmit} {...props}/>
    )
}


let mapStateToProps = (state) => {
    return {
        taskList: state.app.taskList
    }
}
let mapDispatchToProps = {
    addTask: addTaskAC,
    stageOfDone: stageOfDoneAC,
    deleteTask: deleteTaskAC
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer)