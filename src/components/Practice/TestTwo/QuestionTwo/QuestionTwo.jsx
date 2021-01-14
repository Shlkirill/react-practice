import React, { useState } from 'react'
import styles from './QuestionTwo.module.css'

const QuestionTwo = ({ id, question, answer, answerUser, testDone }, ...props) => {
    console.log(answer)

    const [answerValue, setAnswerValue] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.question}>
                {question}
            </div>

            <div className={styles.navigation}>
                {testDone ?
                    <div>
                        <p>{answer == answerUser ?
                            <p className={styles.correctAnswer}>Ваш ответ: <span>{answerUser}</span> - правильно! </p> :
                            <p className={styles.unCorrectAnswer}>Ваш ответ: <span>{answerUser}</span> - не верно! Верный ответ: <span>{answer}</span> </p>}</p>
                    </div> :
                    <div className={styles.answerOptions}>
                        {answer.map(item => {
                            return <button className={styles.possibleAnswer}>{item.possible}</button>
                        })}
                    </div>}
            </div>
        </div>
    )
}

export default QuestionTwo