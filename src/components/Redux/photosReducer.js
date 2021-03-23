import { act } from "react-dom/test-utils";
import { apiGetPhotos, apiEditTitlePhoto, apiDeletePhoto, apiAddPhoto } from "../../api/api";

const GET_PHOTOS = 'GET_PHOTOS';
const EDIT_TITLE = 'EDIT_TITLE';
const DELETE_PHOTO = 'DELETE_PHOTO'

export const getPhotosAC = photos => ({ type: GET_PHOTOS, photos });
export const editTitleAC = (title, idAlbum, idPhoto) => ({ type: EDIT_TITLE, title, idAlbum, idPhoto })
export const deletePhotoAC = id => ({ type: DELETE_PHOTO, id })

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
        return item.filter(photo => {
          if (photo.id !== action.id) return item
        })
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
      await apiAddPhoto(url, title, idAlbum)
    }
  )
}

export const editTitlePhotoTC = (title, idAlbum, idPhoto) => {
  return (
    async (dispatch) => {
      await apiEditTitlePhoto(title, idAlbum, idPhoto);
      dispatch(editTitleAC(title, idAlbum, idPhoto))
    }
  )
}

export const deletePhotoTC = (id) => {
  return (
    async (dispatch) => {
      await apiDeletePhoto(id)
      dispatch(deletePhotoAC(id))
    }
  )
}

export default photosReducer