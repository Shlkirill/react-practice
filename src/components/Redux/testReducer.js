const CHECKING_ANSWER = 'CHECKING_ANSWER'

export const ChekingAnswerAC = (id, answer) => ({ type: CHECKING_ANSWER, id, answer })

let initialState = {
    questions: [{ id: 1, question: 'Чем меньше воды, тем больше глубина. Что это?', answer: 'литература', answerUser: '' },
    { id: 2, question: 'Накормишь – живет, напоишь – умрет. О чем речь?', answer: 'огонь', answerUser: '' },
    { id: 3, question: 'Вам дали, вам принадлежит. Вы не продавали, а пользуются все знакомые.', answer: 'имя', answerUser: '' }],
    answersGiven: false
}

const testReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case CHECKING_ANSWER:
            let testAnswersGiven;
            let arr = state.questions.map(item => {
                if (action.id == item.id) {
                    item.answerUser = action.answer
                }
                item.answerUser == '' ? testAnswersGiven = false : testAnswersGiven = true;
                return item
            })
            console.log(arr)
            stateCopy = {
                ...state,
                questions: [...state.questions],
                answersGiven: testAnswersGiven
            }
            return stateCopy
        default:
            return state

    }
}

export default testReducer