import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})

export const fakeApiGetPosts = async () => {
    let response = await instance.get('/users')
    console.log(response)
    return response.data
};