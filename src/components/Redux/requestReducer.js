import { compose } from "redux";
import { apiDeletPost, apiEditPost, apiGetPosts } from "../../api/api";

const GET_POSTS = 'GET_POSTS';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST = 'EDIT_POST';
const LOADING = 'LOADING';

export const getPostsAC = (posts) => ({ type: GET_POSTS, posts });
export const deletePostAC = (postId) => ({ type: DELETE_POST, postId });
export const editPostAC = (postId, postTittle, postBody) => ({ type: EDIT_POST, postId, postTittle, postBody });
export const loadingAC = () => ({ type: LOADING })

let initialState = {
  postsList: [],
  loadingProcess: false,
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
    case DELETE_POST:
      let arrDeleteItem = state.postsList.filter(item => {
        if (item.id !== action.postId) return item
      })
      stateCopy = {
        ...state,
        postsList: arrDeleteItem,
      }
      return stateCopy;
    case EDIT_POST:
      let arrEdit = state.postsList.map(item => {
        if (item.id == action.postId) {
          item.title = action.postTittle
          item.body = action.postBody
        }
        return item
      })
      stateCopy = {
        ...state,
        postsList: arrEdit,
      }
      return stateCopy;
    case LOADING:
      stateCopy = {
        ...state,
        loadingProcess: !state.loadingProcess
      }
      return stateCopy
    default:
      return state;
  }
}

export const getPostsTC = () => {
  return (
    async (dispatch) => {
      let response = await apiGetPosts();
      dispatch(getPostsAC(response));
    }
  )
}
export const deletePostTC = (idPost) => {
  return (
    async (dispatch) => {
      dispatch(loadingAC())
      await apiDeletPost(idPost); // Delete to server posts
      dispatch(deletePostAC(idPost));
      dispatch(loadingAC())
    }
  )
}
export const editPostTC = (idPost, postTittle, postBody) => {
  return (
    async (dispatch) => {
      dispatch(loadingAC())
      await apiEditPost(idPost, postTittle, postBody);
      dispatch(editPostAC(idPost, postTittle, postBody))
      dispatch(loadingAC())
    }
  )
}

export default requestReducer