import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { deletePostTC, editPostTC, getPostsTC, addPostTC } from '../Redux/requestReducer'
import styles from './RequestContainer.module.css'
import Posts from './Posts/Posts'
import Menu from './Menu/Menu'
import Loader from '../common/Loader'
import Users from './Users/Users'
import { getUsersTC, editUsersTC } from '../Redux/usersReducer'
import Photos from './Photos/Photos'
import { getPhotosTC } from '../Redux/photosReducer'
import PhotoGallery from './Photos/PhotoGallery/PhotoGallery'
import { fakeApiGetPosts } from '../../api/fakeApi'

const RequestContainer = (props) => {

    const loadTrigger = props.users.length == 0 || props.photosList.length == 0;
    const idAlbum = props.match.params.idAlbum;
    const idPhoto = props.match.params.idPhoto;

    useEffect(() => {
        props.getPosts();
        props.getUsers();
        props.getPhotos();
    }, [])

    return (
        <div className={styles.requestContainer}>
            {loadTrigger ? <Loader />:
                <div>
                    <Menu />
                    <Route path='/request_axios/home'>
                        <Posts postsList={props.postsList} addPost={props.addPost} deletPost={props.deletPost}
                            editPost={props.editPost} />
                    </Route>
                    <Route path='/request_axios/users'>
                        <Users users={props.users} editUsers={props.editUsers} />
                    </Route>
                    <Route path='/request_axios/photos/'>
                        {(idAlbum == undefined) ?
                            <Photos photosList={props.photosList} /> :
                            <PhotoGallery photosList={props.photosList[idAlbum]} idAlbum={props.match.params.idAlbum} idPhoto={idPhoto} />}
                    </Route>
                    {props.loadingProcess && <Loader />}
                </div>}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        postsList: state.request.postsList,
        loadingProcess: state.request.loadingProcess,
        users: state.users.usersList,
        photosList: state.photos.photosList
    }
}
let mapDispatchToProps = {
    getPosts: getPostsTC,
    addPost: addPostTC,
    deletPost: deletePostTC,
    editPost: editPostTC,
    getUsers: getUsersTC,
    editUsers: editUsersTC,
    getPhotos: getPhotosTC,
    getfakeApiGetPosts: fakeApiGetPosts
}
let WithRequestContainer = withRouter(RequestContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithRequestContainer)