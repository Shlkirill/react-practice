import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

const ADD_NEW_TASK = 'ADD_NEW_TASK';
const STAGE_OF_DONE = 'STAGE_OF_DONE';
const DELETE_TASK = 'DELETE_TASK';

export const addTaskAC = (task) => ({ type: ADD_NEW_TASK, task });
export const stageOfDoneAC = (idTask) => ({ type: STAGE_OF_DONE, idTask });
export const deleteTaskAC = (idTask) => ({ type: DELETE_TASK, idTask });

let localBaseTask = JSON.parse(localStorage.getItem('taskList'))

let initialState = {
    taskList: [...localBaseTask]
}

const appReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case ADD_NEW_TASK:
            stateCopy = {
                ...state,
                taskList: [...state.taskList]
            }
            let idTask = stateCopy.taskList.length + 1;
            stateCopy.taskList.unshift({ id: idTask, text: action.task, done: false });

            localStorage.setItem('taskList', JSON.stringify(stateCopy.taskList))

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