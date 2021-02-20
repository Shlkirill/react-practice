import { apiGetUsers } from "../../api/api";


const GET_USERS = 'GET_USERS'

export const getUsersAC = (users) => ({ type: GET_USERS, users })


let initialState = {
    usersList: []
}

const usersReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case GET_USERS:
            stateCopy = {
                ...state,
                usersList: action.users
            }
            return stateCopy
        default:
            return state
    }
}


export const getUsersTC = () => {
    return (
        async (dispatch) => {
            let responce = await apiGetUsers();
            dispatch(getUsersAC(responce));
        }
    )
}

export default usersReducer