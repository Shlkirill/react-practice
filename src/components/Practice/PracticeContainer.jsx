import React from 'react'
import Staff from './Staff/Staff'
import { connect } from 'react-redux'
import { editValueAC } from '../Redux/staffReducer'
import Test from './Test/Test'
import { ChekingAnswerAC } from '../Redux/testReducer'
import { selectedAnswerACTWO } from '../Redux/testTwoReducer'
import TestTwo from './TestTwo/TestTwo'

const PracticeContainer = (props) => {
    return (
        <div>
            <Staff staffList={props.staffList} editValue={props.editValue} />
            <Test test={props.test} chekingAnswer={props.chekingAnswer} answersGiven={props.answersGiven} />
            <TestTwo test={props.testTwo} selectedAnswer={props.selectedAnswer}
                answersGivenTwo={props.answersGivenTwo} correctAnswers={props.correctAnswers} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        staffList: state.staffList.staffList,
        test: state.test.questions,
        testTwo: state.testTwo.questions,
        answersGiven: state.test.answersGiven,
        answersGivenTwo: state.testTwo.answersGiven,
        correctAnswers: state.testTwo.correctAnswers
    }
}
let mapDispatchToProps = {
    editValue: editValueAC,
    chekingAnswer: ChekingAnswerAC,
    selectedAnswer: selectedAnswerACTWO
}

export default connect(mapStateToProps, mapDispatchToProps)(PracticeContainer)