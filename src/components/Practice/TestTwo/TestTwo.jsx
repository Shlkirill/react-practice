import React, { useState } from 'react'
import Slider from 'react-slick';
import QuestionTwo from './QuestionTwo/QuestionTwo';
import styles from './TestTwo.module.css'

const TestTwo = ({ test, answersGivenTwo, selectedAnswer, correctAnswers }) => {
    const [testDone, setTestDone] = useState(false)

    const customeSlider = React.createRef();
    const [sliderSettings, setSliderSettings] = useState({
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    })

    const gotoNext = () => {
        customeSlider.current.slickNext()
    }

    const gotoPrev = () => {
        customeSlider.current.slickPrev()
    }

    let questions = test.map(item => {
        return <QuestionTwo key={item.id} id={item.id} question={item.question}
            answer={item.answer} answerUser={item.answerUser} selectedAnswer={selectedAnswer}
            testDone={testDone} gotoNext={gotoNext} />
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h3>Задание № 3 (Тест)</h3>
                {!testDone ?
                    <div>
                        <Slider {...sliderSettings} ref={customeSlider}>
                            {questions}
                        </Slider>
                        <div className={styles.navigation_container}>
                            <button className={styles.buttonNavigation} onClick={() => gotoPrev()}>Предыдущий <br/> вопрос</button>
                            <button className={styles.buttonNavigation} onClick={() => gotoNext()}>Следующий <br/> вопрос</button>
                        </div>
                        <div className={styles.button_container}>
                            <button onClick={() => { setTestDone(!testDone) }} disabled={answersGivenTwo !== test.length}
                                className={styles.button}> Сдать тест</button>
                        </div>
                    </div> :
                    <div>
                        <div className={styles.doneContainer}>
                            {questions}
                        </div>
                        <p className={styles.doneInfo}>Колличество Ваших правильных ответов - <span>{correctAnswers}</span></p>
                    </div>}
            </div>
        </div>
    )
}

export default TestTwo