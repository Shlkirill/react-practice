import React, { useState } from 'react'
import styles from './Question.module.css'

const Question = ({ id, question, answer, answerUser, chekingAnswer, testDone }) => {

    const [answerValue, setAnswerValue] = useState('');
    const [error, setError] = useState(false)

    const onAnswer = (e) => {
        if (/^\s+$/.test(e.target.value) || e.target.value == '') {
            setError(true)
        } else {
            setAnswerValue(e.target.value.toLowerCase().trim())
            setError(false)
        }
    }

    const onChekingAnswer = () => {
        if (/^\s+$/.test(answerValue) || answerValue == '') {
            setError(true)
        } else {
            chekingAnswer(id, answerValue)
            setError(false)
        }
    }

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
                    <div className={styles.dataInput}>
                        <input type="text" name="" id="" className={styles.answer} onChange={onAnswer} disabled={answerUser == '' ? false : true} />
                        <div className={`${styles.error} ${error ? styles.showError : ''}`}> Это поле не может быть пустым </div>
                        {answerUser == '' ?
                            <button onClick={onChekingAnswer} className={styles.button} disabled={error ? true : false}>Ответить</button> :
                            <span className={styles.recd}>Ответ принят</span>}
                    </div>}
                <div className={styles.border}></div>
            </div>
        </div>
    )
}

export default Question