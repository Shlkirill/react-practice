import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
})

export const apiGetPosts = async () => {
    let response = await instance.get('/posts')
    return response.data
};
export const apiAddPost = async (postTittle, postBody) => {
    const idPost = `f${(~~(Math.random() * 1e8)).toString(16)}`;

    let date = new Date();

    let getDate = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate();
    let getMonth = (date.getMonth() < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let createDate = `${getDate}.${getMonth}.${date.getFullYear()}`

    let getHours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    let getMinutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    let createTime = `${getHours}:${getMinutes}`;

    let newPost = {
        userId: 1,
        id: idPost,
        title: postTittle,
        body: postBody,
        datePublisher: {
            date: createDate,
            time: createTime,
            edit: false,
        }
    }
    let response = await instance.post(`/posts`, newPost)

    return response
};
export const apiDeletPost = async (idPost) => {
    let response = await instance.delete(`/posts/${idPost}`)
    return response
};
export const apiEditPost = async (idPost, postTittle, postBody) => {
    let responseGet = await instance.get(`/posts/${idPost}`)
    let copyPost = {
        ...responseGet.data,
        title: postTittle,
        body: postBody,
        datePublisher: {
            ...responseGet.data.datePublisher,
            edit: true,
        }
    }
    let responsePost = await instance.put(`/posts/${idPost}`, copyPost)
    return responsePost
};

export const apiGetUsers = async () => {
    let response = await instance.get('/users')
    return response.data
};
export const apiEditUsers = async (objInfoUser) => {
    let responseGet = await instance.get(`/users/${objInfoUser.id}`)

    let copyUser = {
        ...responseGet.data,
        ...objInfoUser,
    }
    let responseUser = await instance.put(`/users/${objInfoUser.id}`, copyUser)
    return responseUser
};

export const apiGetPhotos = async () => {
    let response = await instance.get('/photos2')
    return response.data
};

export const apiEditTitlePhoto = async (title, idAlbum, idPhoto) => {
    let getPhoto = await instance.get(`/photos2/${idAlbum}`) // Получаем нужный нам альбом с сервера

    getPhoto.data.photosList.find(item => item.id == idPhoto)
        .title = title // Находим фото по id в альбоме и меняем его title

    await instance.put(`/photos2/${idAlbum}`, getPhoto.data); // Загружаем альбом(с новым title фото) на сервер
}
export const apiAddPhoto = async (url, title, idAlbum) => {
    //Из за json-server не удается получить дочерний массив (набор фото) альбома, поэтому добавление фотографии происходит путем перезаписи альбома

    let getPhoto = await instance.get(`/photos2/${idAlbum}`) // Получаем нужный нам альбом с сервера

    const idPhoto = `f${(~~(Math.random() * 1e8)).toString(16)}`; // Выдаем рандомный Id фото

    let newPhoto = {
        id: idPhoto,
        title: title,
        url: url
    } // Формируем объект нового фото 
    let copyAlbum = {
        ...getPhoto.data
    } // Копируем объект альбома 
    copyAlbum.photosList.unshift(newPhoto) // Добовляем новое фото в массив фотографий

    let response = await instance.put(`/photos2/${idAlbum}`, copyAlbum); // Заливаем новый альбом на сервер
    return response.data
}

export const apiDeletePhoto = async (idAlbum, idPhoto) => {
    //Из за json-server не удается получить дочерний массив (набор фото) альбома, поэтому удаление фотографии происходит путем перезаписи альбома

    let getPhoto = await instance.get(`/photos2/${idAlbum}`) // Получаем нужный нам альбом с сервера

    let newArrPhotos = getPhoto.data.photosList.filter(item => {
        if (item.id !== idPhoto) return item
    }) // Возвращаем массив фото, без удаленной фотографии 
    let copyAlbum = {
        ...getPhoto.data,
        photosList: newArrPhotos
    }
    await instance.put(`/photos2/${idAlbum}`, copyAlbum); // Заливаем новый альбом на сервер
}