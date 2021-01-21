import React, { useState } from 'react'
import styles from './QuestionTwo.module.css'

const QuestionTwo = ({ id, question, answer, answerUser, testDone, selectedAnswer, gotoNext }) => {

    const onSelectedAnswer = (id, itemId) => {
        selectedAnswer(id, itemId);
        gotoNext();
    }

    return (
        <div className={styles.container}>
            <div className={styles.question}>
                {question}
            </div>

            <div className={styles.navigation}>
                <div className={styles.answerOptions}>
                    {!testDone ? answer.map(item => {
                        return <button className={styles.possibleAnswer + " " + ((answerUser == item.possible) ? styles.possibleAnswerOk : '')}
                            onClick={() => { onSelectedAnswer(id, item.id) }} disabled={answerUser}>{item.possible}</button>
                    }) : answer.map(item => {
                        console.log(item.possible == answerUser, item.correct)
                        return <button
                            className={styles.possibleAnswer + " " + (item.correct && styles.done_correct) + " " +
                                (item.possible == answerUser && item.correct && styles.done_correct) + " " + (item.possible == answerUser && !item.correct && styles.done_unCorrect)}
                            disabled={true}>
                            {item.possible}
                            {item.correct && <p className={styles.done_info} >Верный ответ</p>}
                            {(item.possible == answerUser && !item.correct && <p className={styles.done_info} >Вы ответили</p>)}
                        </button>
                    })}
                </div>
                {!testDone ? answerUser ? 'Ответ принят' : null : null}
            </div>
        </div>
    )
}

export default QuestionTwo