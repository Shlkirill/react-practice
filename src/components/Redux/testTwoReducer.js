const CHECKING_ANSWER = 'CHECKING_ANSWER'

export const ChekingAnswerACTWO = (id, answer) => ({ type: CHECKING_ANSWER, id, answer })

let initialState = {
    questions: 
    [{id: 124, question: 'Чем меньше воды, тем больше глубина. Что это?',
        answer: [{ id: 1, possible: 'Литература', сorrect: true },
        { id: 2, possible: 'Впадина', сorrect: false },
        { id: 3, possible: 'Вулкан', сorrect: false },
        { id: 4, possible: 'Знания', сorrect: false }]},
    { id: 345, question: 'Накормишь – живет, напоишь – умрет. О чем речь?', 
        answer: [{ id: 1, possible: 'Память', сorrect: false },
        { id: 2, possible: 'Жажда', сorrect: false },
        { id: 3, possible: 'Огонь', сorrect: true },
        { id: 4, possible: 'Муж', сorrect: false }]},
    { id: 7, question: 'Вам дали, вам принадлежит. Вы не продавали, а пользуются все знакомые.', 
        answer: [{ id: 1, possible: 'Умения', сorrect: false },
        { id: 2, possible: 'Машина', сorrect: false },
        { id: 3, possible: 'Щедрость', сorrect: false },
        { id: 4, possible: 'Имя', сorrect: true }]},
    { id: 8, question: 'Чего боятся люди, которые страдают алекторофобией?', 
        answer: [{ id: 1, possible: 'собак', сorrect: false },
        { id: 2, possible: 'Кур', сorrect: true },
        { id: 3, possible: 'Бороды', сorrect: false },
        { id: 4, possible: 'Чеснок', сorrect: false }]}],
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