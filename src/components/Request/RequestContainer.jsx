import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react/cjs/react.development'
import { getUsersTC } from '../Redux/requestReducer'
import Main from './Main/Main'
import Menu from './Menu/Menu'

const RequestContainer = (props) => {
    useEffect(() => {
        props.getUsers()
    }, [])

    return (
        <div>
            <Menu />
            <Main postsList={props.postsList} />
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