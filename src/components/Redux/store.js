import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './toDoListReducer';
import staffReducer from './staffReducer';
import testReducer from './testReducer';
import testTwoReducer from './testTwoReducer';

let rootReducer = combineReducers({
    app: appReducer,
    staffList: staffReducer,
    test: testReducer,
    testTwo: testTwoReducer,
    form: formReducer,
});

export const store = createStore(rootReducer);


export default appReducer