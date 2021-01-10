import React from 'react'
import Staff from './Staff/Staff'
import { connect } from 'react-redux'

const PracticeContainer = (props) => {
    return (
        <Staff staffList={props.staffList}/>
    )
}

let mapStateToProps = (state) => {
    return {
        staffList: state.staffList.staffList
    }
}
let mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PracticeContainer)