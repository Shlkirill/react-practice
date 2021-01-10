const ADD_NEW_TASK = 'ADD_NEW_TASK';


export const addTaskAC = (task) => ({ type: ADD_NEW_TASK, task });


let initialState = {
    staffList: [{id: '1', name: 'Андрей', daysWorked: 2, rate: 1000},
    {id: '2', name: 'Кирилл', daysWorked: 3, rate: 1100}]
}

const staffReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case ADD_NEW_TASK:

            return stateCopy;

        default:
            return state;
    }
}

export default staffReducer