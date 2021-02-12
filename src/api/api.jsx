import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    withCredentials: true,
})

export const apiGetUsers = async () => {
    let response = await instance.get()
    return response.data
};