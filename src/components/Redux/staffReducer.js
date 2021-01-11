const EDIT_VALUE = 'EDIT_VALUE';


export const editValueAC = (id, value, trigger) => ({ type: EDIT_VALUE, id, value, trigger });


let initialState = {
    staffList: [{ id: '1', name: 'Андрей', daysWorked: 2, rate: 1000 },
    { id: '2', name: 'Кирилл', daysWorked: 3, rate: 1100 }]
}

const staffReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case EDIT_VALUE:
            let arr = state.staffList.map(item => {
                debugger;
                if (action.trigger == 'DAYS') {
                    if (item.id == action.id) item.daysWorked = action.value
                }
                if (action.trigger == 'RATE') {
                    if (item.id == action.id) item.rate = action.value
                }
                return item
            })
            console.log(arr)
            stateCopy = {
                ...state,
                staffList: [...state.staffList],
            }
            return stateCopy;

        default:
            return state;
    }
}

export default staffReducer