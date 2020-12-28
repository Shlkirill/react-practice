import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

const ADD_NEW_TASK = 'ADD_NEW_TASK';
const STAGE_OF_DONE = 'STAGE_OF_DONE';
const EDIT_TEXT_TASK = 'EDIT_TEXT_TASK';
const DELETE_TASK = 'DELETE_TASK';

export const addTaskAC = (task) => ({ type: ADD_NEW_TASK, task });
export const stageOfDoneAC = (idTask) => ({ type: STAGE_OF_DONE, idTask });
export const editTextTaskAC = (idTask, textTask) => ({ type: EDIT_TEXT_TASK, idTask, textTask })
export const deleteTaskAC = (idTask) => ({ type: DELETE_TASK, idTask });

let localBaseTask = JSON.parse(localStorage.getItem('taskList'))

let initialState = {
    taskList: [...localBaseTask]
}

const appReducer = (state = initialState, action) => {
    let stateCopy;
    let date = new Date();

    let getDate = (date.getDate() < 10) ? '0' + date.getDate(): date.getDate();
    let getMonth = (date.getMonth() < 10) ? '0' + date.getMonth(): date.getMonth();
    let createDate = `${getDate}.${getMonth}.${date.getFullYear()}`

    let getHours = (date.getHours() < 10) ? '0' + date.getHours(): date.getHours();
    let getMinutes = (date.getMinutes() < 10) ? '0' + date.getMinutes(): date.getMinutes();
    let createTime = `${getHours}:${getMinutes}`;

    switch (action.type) {
        case ADD_NEW_TASK:
            stateCopy = {
                ...state,
                taskList: [...state.taskList]
            }
            const idTask = `f${(~~(Math.random() * 1e8)).toString(16)}`;
            stateCopy.taskList.unshift({ id: idTask, text: action.task, done: false, createDateTask: {date: createDate, time: createTime}});

            localStorage.setItem('taskList', JSON.stringify(stateCopy.taskList))
            console.log(stateCopy)
            return stateCopy;
        case STAGE_OF_DONE:
            let arr = state.taskList.map((item) => {
                if (item.id == action.idTask) {
                    item.done = !item.done
                }
                return item
            })
            stateCopy = {
                ...state,
                taskList: [...arr]
            }
            localStorage.setItem('taskList', JSON.stringify(arr))
            return stateCopy;
        case EDIT_TEXT_TASK:

            let arrEditText = state.taskList.map((item) => {
                if (item.id == action.idTask) {
                    item.text = action.textTask;
                    item.createDateTask.time = `ред. ${createTime}`;
                    item.createDateTask.date = createDate;
                }
                return item
            })
            stateCopy = {
                ...state,
                taskList: [...arrEditText]
            }
            localStorage.setItem('taskList', JSON.stringify(arrEditText))
            return stateCopy;
        case DELETE_TASK:
            let arrfilter = state.taskList.filter((item) => {
                return (item.id !== action.idTask) ? true : false
            });
            stateCopy = {
                ...state,
                taskList: [...arrfilter]
            }

            localStorage.setItem('taskList', JSON.stringify(arrfilter))

            return stateCopy;
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    app: appReducer,
    form: formReducer,
});

export const store = createStore(rootReducer);


export default appReducer