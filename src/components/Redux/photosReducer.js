import { act } from "react-dom/test-utils";
import { apiGetPhotos, apiEditTitlePhoto, apiDeletePhoto, apiAddPhoto } from "../../api/api";
import { loadingAC } from "./requestReducer";

const GET_PHOTOS = 'GET_PHOTOS';
const ADD_PHOTO = 'ADD_PHOTO';
const EDIT_TITLE = 'EDIT_TITLE';
const DELETE_PHOTO = 'DELETE_PHOTO'

export const getPhotosAC = photos => ({ type: GET_PHOTOS, photos });
export const addPhotoAC = (albumWithNewPhoto) => ({ type: ADD_PHOTO, albumWithNewPhoto })
export const editTitleAC = (title, idAlbum, idPhoto) => ({ type: EDIT_TITLE, title, idAlbum, idPhoto })
export const deletePhotoAC = (idAlbum, idPhoto) => ({ type: DELETE_PHOTO, idAlbum, idPhoto })

let initialState = {
  albumsList: [],
}

const photosReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case GET_PHOTOS:
      stateCopy = {
        ...state,
        albumsList: action.photos,
      }
      return stateCopy;
    case ADD_PHOTO:

      let newAlbumsList = state.albumsList.map(item => {
          if (item.id == action.albumWithNewPhoto.id) item = action.albumWithNewPhoto
          return item
      })

      stateCopy = {
        ...state,
        albumsList: newAlbumsList
      }
      return stateCopy  
    case EDIT_TITLE:
      let arrayEditPhoto = state.albumsList.map(item => {
        if (item.id == action.idAlbum) {
          item.photosList.map(item => {
            if (item.id == action.idPhoto) item.title = action.title
            return item
          })
        }
        return item
      })
      stateCopy = {
        ...state,
        albumsList: arrayEditPhoto
      }
      return stateCopy
    case DELETE_PHOTO:
      let arrayWithoutDeletedPhoto = state.albumsList.map(item => {
        if (item.id == action.idAlbum) {
          let arr = item.photosList.filter(item2 => {
            return item2.id !== action.idPhoto
          })
          item.photosList = arr
        }
        return item
      })
      stateCopy = {
        ...state,
        albumsList: arrayWithoutDeletedPhoto
      }
      return stateCopy
    default:
      return state;
  }
}

export const getPhotosTC = () => {
  return (
    async (dispatch) => {
      let response = await apiGetPhotos();
      dispatch(getPhotosAC(response));
    }
  )
}

export const addPhotoTC = (url, title, idAlbum) => {
  return (
    async (dispatch) => {
      dispatch(loadingAC())
      let albumWithNewPhoto = await apiAddPhoto(url, title, idAlbum);
      dispatch(addPhotoAC(albumWithNewPhoto))
      dispatch(loadingAC())
    }
  )
}

export const editTitlePhotoTC = (title, idAlbum, idPhoto) => {
  return (
    async (dispatch) => {
      dispatch(loadingAC())
      await apiEditTitlePhoto(title, idAlbum, idPhoto);
      dispatch(editTitleAC(title, idAlbum, idPhoto))
      dispatch(loadingAC())
    }
  )
}

export const deletePhotoTC = (idAlbum, idPhoto) => {
  return (
    async (dispatch) => {
      dispatch(loadingAC())
      await apiDeletePhoto(idAlbum, idPhoto)
      dispatch(deletePhotoAC(idAlbum, idPhoto))
      dispatch(loadingAC())
    }
  )
}

export default photosReducer