import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { deletePostTC, editPostTC, getPostsTC } from '../Redux/requestReducer'
import styles from './RequestContainer.module.css'
import Home from './Home/Home'
import Menu from './Menu/Menu'
import Loader from '../common/Loader'
import Users from './Users/Users'
import { getUsersTC, editUsersTC } from '../Redux/usersReducer'
import Photos from './Photos/Photos'
import { getPhotosTC } from '../Redux/photosReducer'
import PhotoGallery from './Photos/PhotoGallery/PhotoGallery'

const RequestContainer = (props) => {

    useEffect(() => {
        props.getPosts();
        props.getUsers();
        props.getPhotos();
    }, [])

    return (
        <div className={styles.requestContainer}>
            {props.loadingProcess && <div className={styles.loaderContainer}>
                <Loader />
            </div>}
            <Menu />
            <Route path='/request_axios/home'>
                <Home postsList={props.postsList} deletPost={props.deletPost}
                    editPost={props.editPost} />
            </Route>
            <Route path='/request_axios/users'>
                <Users users={props.users} editUsers={props.editUsers} />
            </Route>
            <Route path='/request_axios/photos/:idPhoto?'>
                {(props.match.params.idAlbum == undefined) ?
                    <Photos photosList={props.photosList} /> :
                    <PhotoGallery photosList={props.photosList[props.match.params.idAlbum]} idAlbum={props.match.params.idAlbum} />}
            </Route>
            <Route path='/*'><Redirect to={'/request_axios/home'} /></Route>
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
    deletPost: deletePostTC,
    editPost: editPostTC,
    getUsers: getUsersTC,
    editUsers: editUsersTC,
    getPhotos: getPhotosTC
}
let WithRequestContainer = withRouter(RequestContainer)
export default connect(mapStateToProps, mapDispatchToProps)(WithRequestContainer)