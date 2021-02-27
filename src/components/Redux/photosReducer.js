import { apiGetPhotos } from "../../api/api";

const GET_PHOTOS = 'GET_PHOTOS';

export const getPhotosAC = (photos) => ({ type: GET_PHOTOS, photos });

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

export default photosReducer