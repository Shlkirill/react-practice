import { apiGetUsers } from "../../api/api";


const GET_USERS = 'GET_USERS'
const EDIT_USERS = 'EDIT_USERS'

export const getUsersAC = (users) => ({ type: GET_USERS, users })
export const editUsersAC = (newUsersList) => ({ type: EDIT_USERS, newUsersList })


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
        case EDIT_USERS:
            console.log(action.newUsersList)
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
export const editUsersTC = (newUsersList) => {
    return (
        async (dispatch) => {
            dispatch(editUsersAC(newUsersList));
        }
    )
}

export default usersReducer