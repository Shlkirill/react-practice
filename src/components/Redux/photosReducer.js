import { act } from "react-dom/test-utils";
import { apiGetPhotos, apiEditTitlePhoto, apiDeletePhoto } from "../../api/api";

const GET_PHOTOS = 'GET_PHOTOS';
const EDIT_TITLE = 'EDIT_TITLE';
const DELETE_PHOTO = 'DELETE_PHOTO'

export const getPhotosAC = photos => ({ type: GET_PHOTOS, photos });
export const editTitleAC = (title, id) => ({ type: EDIT_TITLE, title, id })
export const deletePhotoAC = id => ({ type: DELETE_PHOTO, id })

let initialState = {
  photosList: [],
}

const photosReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case GET_PHOTOS:

      let counter = 1;
      let photosListFilter = []

      while (counter <= action.photos.length / 50) {
        let arrPhotos = action.photos
          .filter(item => {
            if (item.albumId == counter) return item
          })
        photosListFilter.push(arrPhotos)
        counter++
      }

      stateCopy = {
        ...state,
        photosList: photosListFilter,
      }

      return stateCopy;
    case EDIT_TITLE:
      let arrayEditPhoto = state.photosList.map(item => {
        item.map(photo => {
          if (photo.id == action.id) photo.title = action.title
        })
        return item
      })
      stateCopy = {
        ...state,
        photosList: arrayEditPhoto
      }
      return stateCopy
    case DELETE_PHOTO:
      let arrayWithoutDeletedPhoto = state.photosList.map(item => {
        return item.filter(photo => {
          if (photo.id !== action.id) return item
        })
      })
      stateCopy = {
        ...state,
        photosList: arrayWithoutDeletedPhoto
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

export const editTitlePhotoTC = (title, id) => {
  return (
    async (dispatch) => {
      await apiEditTitlePhoto(title, id);
      dispatch(editTitleAC(title, id))
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