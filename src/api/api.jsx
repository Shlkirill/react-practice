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

    let getDate = (date.getDate() < 10) ? '0' + date.getDate(): date.getDate();
    let getMonth = (date.getMonth() < 10) ? '0' + (date.getMonth() + 1): date.getMonth() + 1;
    let createDate = `${getDate}.${getMonth}.${date.getFullYear()}`

    let getHours = (date.getHours() < 10) ? '0' + date.getHours(): date.getHours();
    let getMinutes = (date.getMinutes() < 10) ? '0' + date.getMinutes(): date.getMinutes();
    let createTime = `${getHours}:${getMinutes}`;

    let newPost = {
      userId: 1,
      id: idPost,
      title: postTittle,
      body: postBody,
      datePublisher: {
          date: createDate,
          time: createTime
      }
    }
    let response = await instance.post(`/posts`, newPost)
    console.log(response)
    return response
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