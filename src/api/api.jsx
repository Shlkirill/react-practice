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
    let response = await instance.get('/photos')
    return response.data
};

export const apiEditTitlePhoto = async (title, id) => {
    let getPhoto = await instance.get(`/photos/${id}`)
    let copyPhoto = {
        ...getPhoto.data,
        title
    }
    let response = await instance.put(`/photos/${id}`, copyPhoto);
    console.log(response)
}

export const apiDeletePhoto = async (id) => {
    await instance.delete(`/photos/${id}`)
}