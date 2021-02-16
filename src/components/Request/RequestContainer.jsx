import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route} from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { getUsersTC } from '../Redux/requestReducer'
import Home from './Home/Home'
import Menu from './Menu/Menu'

const RequestContainer = (props) => {
    useEffect(() => {
        props.getUsers()
    }, [])

    return (
        <div>
            <Menu />
            <Route path='/request_axios/home'><Home postsList={props.postsList} /></Route>
            <Route path='/*'><Redirect to={'/request_axios/home'} /></Route>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        postsList: state.request.postsList
    }
}
let mapDispatchToProps = {
    getUsers: getUsersTC
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestContainer)