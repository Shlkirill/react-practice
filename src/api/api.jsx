import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    withCredentials: true,
})

export const apiGetPosts = async () => {
    let response = await instance.get()
    return response.data
};
export const apiDeletPost = async (idPost) => {
    let response = await instance.delete(`/${idPost}`)
    return response
};
export const apiEditPost = async (idPost, postTittle, postBody) => {
    let obj = {
        title: postTittle,
        body: postBody,
    }
    let response = await instance.put(`/${idPost}`, obj)
    console.log(response)
    return response
};