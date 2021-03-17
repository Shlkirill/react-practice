import { act } from "react-dom/test-utils";
import { apiGetPhotos, apiEditTitlePhoto, apiDeletePhoto } from "../../api/api";

const GET_PHOTOS = 'GET_PHOTOS';
const EDIT_TITLE = 'EDIT_TITLE'

export const getPhotosAC = photos => ({ type: GET_PHOTOS, photos });
export const editTitleAC = (title, id, idAlbum) => ({ type: EDIT_TITLE, title, id, idAlbum })

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
      let arr = state.photosList.map(item => {
        item.map(photo => {
          if (photo.id == action.id) photo.title = action.title
          return item
        })
        return item
      })
      console.log(state.photosList,arr)
      stateCopy = {
        ...state,
        photosList: arr
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

export const editTitlePhotoTC = (title, id, idAlbum) => {
  return (
    async (dispatch) => {
      let response = await apiEditTitlePhoto(title, id);
      dispatch(editTitleAC(title, id, idAlbum))
    }
  )
}

export const deletePhotoTC = (id) => {
  return (
    async (dispatch) => {
      await apiDeletePhoto(id)
    }
  )
}

export default photosReducer