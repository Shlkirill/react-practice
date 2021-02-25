import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    withCredentials: true,
})

export const apiGetPosts = async () => {
    let response = await instance.get('/posts')
    return response.data
};
export const apiDeletPost = async (idPost) => {
    let response = await instance.delete(`/posts/${idPost}`)
    return response
};
export const apiEditPost = async (idPost, postTittle, postBody) => {
    let obj = {
        title: postTittle,
        body: postBody,
    }
    let response = await instance.put(`/posts/${idPost}`, obj)
    return response
};

export const apiGetUsers = async () => {
    let response = await instance.get('/users')
    return response.data
};

export const apiGetPhotos = async () => {
    let response = await instance.get('/photos')
    return response.data
};