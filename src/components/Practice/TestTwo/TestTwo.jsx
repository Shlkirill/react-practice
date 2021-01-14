import React, { useState } from 'react'
import Slider from 'react-slick';
import QuestionTwo from './QuestionTwo/QuestionTwo';
import styles from './TestTwo.module.css'

const TestTwo = ({ test, chekingAnswer, answersGiven }) => {
  const [testDone, setTestDone] = useState(false)

  // function SampleNextArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{ ...style, display: "block", background: "red" }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  //   function SamplePrevArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{ ...style, display: "block", background: "green" }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />
  // };

  // setting slider configurations
  debugger
  const customeSlider = React.creatRef();
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  })
  // const gotoNext = () => {
  //   customeSlider.current.slickNext()
  // }

  // const gotoPrev = () => {
  //   customeSlider.current.slickPrev()
  // }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Задание № 2 (Тест)</h3>
        {/* <button onClick={() => gotoNext()}>Next</button>
        <button onClick={() => gotoPrev()}>Previous</button> */}
        <Slider {...sliderSettings} ref={customeSlider}>
          {test.map(item => {
            return <QuestionTwo key={item.id} id={item.id} question={item.question}
              answer={item.answer} answerUser={item.answerUser} chekingAnswer={chekingAnswer}
              testDone={testDone} />
          })}
        </Slider>
        <div className={styles.button_container}>
          {!testDone ?
            <button onClick={() => { setTestDone(!testDone) }} disabled={answersGiven ? false : true}
              className={styles.button}> Сдать тест</button> :
            null}
        </div>
      </div>
    </div>
  )
}

export default TestTwo