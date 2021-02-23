const GET_PHOTOS = 'GET_PHOTOS';

export const getPhotosAC = (photos) => ({ type: GET_PHOTOS, photos });

let initialState = {
    photosList: [],
}

const photosReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case GET_PHOTOS:
            stateCopy = {
                ...state,
                photosList: action.photos
            }
            return stateCopy;
        default:
            return state;
    }
}