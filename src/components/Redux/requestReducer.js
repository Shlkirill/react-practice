import { apiGetUsers } from "../../api/api";

const GET_POSTS = 'GET_POSTS';


export const getPostsAC = (posts) => ({ type: GET_POSTS, posts });

let initialState = {
  postsList: []
}

const requestReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case GET_POSTS:
      stateCopy = {
        ...state,
        postsList: action.posts
      }
      return stateCopy;

    default:
      return state;
  }
}

export const getUsersTC = () => {
  return (
    async (dispatch) => {
      let response = await apiGetUsers();
      dispatch(getPostsAC(response));
    }
  )
}

// export const getUsersTC = (pageSize: number, activePage: number): ThunkUsersType => {
//   return (
//     async (dispatch) => {
//       dispatch(actions.toggleIfFetchingAC(true));
//       let response = await apiGetUsers(pageSize, activePage);
//       dispatch(actions.setUsersAC(response.items, response.totalCount));
//       dispatch(actions.toggleIfFetchingAC(false));
//     }
//   )
// }

export default requestReducer