import React from 'react'
import ToDoList from './ToDoList'
import { connect } from 'react-redux'
import { addTaskAC, stageOfDoneAC, deleteTaskAC, editTextTaskAC } from '../Redux/toDoListReducer'
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
        <ToDoListForm onSubmit={onSubmit} {...props} />
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
    deleteTask: deleteTaskAC,
    editTextTask: editTextTaskAC,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer)