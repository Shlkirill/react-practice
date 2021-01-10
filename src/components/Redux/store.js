import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './toDoListReducer';
import staffReducer from './staffReducer';


let rootReducer = combineReducers({
    app: appReducer,
    staffList: staffReducer,
    form: formReducer,
});

export const store = createStore(rootReducer);


export default appReducer