import React from 'react'
import Staff from './Staff/Staff'
import { connect } from 'react-redux'
import { editValueAC } from '../Redux/staffReducer'

const PracticeContainer = (props) => {
    return (
        <Staff staffList={props.staffList} editValue={props.editValue}/>
    )
}

let mapStateToProps = (state) => {
    return {
        staffList: state.staffList.staffList
    }
}
let mapDispatchToProps = {
    editValue: editValueAC
}

export default connect(mapStateToProps, mapDispatchToProps)(PracticeContainer)