import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { deletePostTC, editPostTC, getPostsTC } from '../Redux/requestReducer'
import styles from './RequestContainer.module.css'
import Home from './Home/Home'
import Menu from './Menu/Menu'
import Loader from '../common/Loader'
import Users from './Users/Users'
import { getUsersTC } from '../Redux/usersReducer'

const RequestContainer = (props) => {
    useEffect(() => {
        props.getPosts();
        props.getUsers();
    }, [])

    return (
        <div className={styles.requestContainer}>
            { props.loadingProcess && <div className={styles.loaderContainer}>
                <Loader />
            </div>}
            <Menu />
            <Route path='/request_axios/home'><Home postsList={props.postsList} deletPost={props.deletPost}
                editPost={props.editPost} /></Route>
            <Route path='/request_axios/users'>
                <Users users={props.users}/>
            </Route>
            <Route path='/*'><Redirect to={'/request_axios/home'} /></Route>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        postsList: state.request.postsList,
        loadingProcess: state.request.loadingProcess,
        users: state.users.usersList
    }
}
let mapDispatchToProps = {
    getPosts: getPostsTC,
    deletPost: deletePostTC,
    editPost: editPostTC,
    getUsers: getUsersTC
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestContainer)