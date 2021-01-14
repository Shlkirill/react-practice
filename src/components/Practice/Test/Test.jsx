import React, { useState } from 'react'
import Question from './Question/Question';
import styles from './Test.module.css'

const Test = ({ test, chekingAnswer, answersGiven }) => {
    const [testDone, setTestDone] = useState(false)
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3>Задание № 2 (Тест)</h3>
                {test.map(item => {
                    return <Question key={item.id} id={item.id} question={item.question}
                        answer={item.answer} answerUser={item.answerUser} chekingAnswer={chekingAnswer}
                        testDone={testDone} />
                })}
                <div className={styles.button_container}>
                {!testDone ? 
                <button onClick={() => { setTestDone(!testDone) }} disabled={answersGiven ? false : true} 
                className={styles.button}> Сдать тест</button>:
                null}
                </div>
            </div>
        </div>
    )
}

export default Test