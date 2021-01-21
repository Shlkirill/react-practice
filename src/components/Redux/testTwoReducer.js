const SELECTED_ANSWER = 'SELECTED_ANSWER'

export const selectedAnswerACTWO = (questionId, answerId) => ({ type: SELECTED_ANSWER, questionId, answerId })

let initialState = {
    questions: 
    [{id: `f${(~~(Math.random() * 1e8)).toString(16)}`, question: 'Чем меньше воды, тем больше глубина. Что это?',
        answer: [{ id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Литература', correct: true },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Впадина', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Вулкан', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Знания', correct: false }], answerUser: ''},
    { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, question: 'Накормишь – живет, напоишь – умрет. О чем речь?', 
        answer: [{ id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Память', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Жажда', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Огонь', correct: true },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Муж', correct: false }], answerUser: ''},
    { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, question: 'Вам дали, вам принадлежит. Вы не продавали, а пользуются все.', 
        answer: [{ id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Умения', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Машина', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Щедрость', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Имя', correct: true }], answerUser: ''},
    { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, question: 'Чего боятся люди, которые страдают алекторофобией?', 
        answer: [{ id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Cобак', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Кур', correct: true },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Бороды', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Чеснок', correct: false }], answerUser: ''},
    { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, question: 'Какого газа в атмосфере Земли больше всего?', 
        answer: [{ id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Кислород', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Угл. газ', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Азот', correct: true },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Водород', correct: false }], answerUser: ''},
    { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, question: 'Назовите столицу Европейского Союза?', 
        answer: [{ id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Вена', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Брюсель', correct: true },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Кельн', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: 'Париж', correct: false }], answerUser: ''},
    { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, question: 'Как далеко находится Земля от Солнца?', 
        answer: [{ id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: '149 000 000 км', correct: true },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: '14 900 км', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: '257 800 000 км', correct: false },
        { id: `f${(~~(Math.random() * 1e8)).toString(16)}`, possible: '190 000 000 км', correct: false }], answerUser: ''}],
    answersGiven: 0,
    correctAnswers: 0,
}

const testReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SELECTED_ANSWER:
            let arr = state.questions.map(item => {
                if (item.id == action.questionId) {
                    item.answer.map(answerItem =>{
                        if (answerItem.id == action.answerId) {
                            item.answerUser = answerItem.possible
                            state.answersGiven++;
                            if (answerItem.correct) state.correctAnswers++
                        }
                    })
                    return item    
                }
                return item 
            })
            console.log(state.correctAnswers)
            stateCopy = {
                ...state,
                questions: [...arr],
            }
            return stateCopy
        default:
            return state

    }
}

export default testReducer