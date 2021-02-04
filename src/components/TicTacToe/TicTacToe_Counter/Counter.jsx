import React from 'react'
import styles from './Counter.module.css'

const Counter = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.counter}>
                    <div className={styles.counterTimes}>{props.times} <span className={styles.value}>{props.count.times}</span></div>
                    <div className={styles.counterDraw}>{props.times}{props.circle} <span className={styles.value}>{props.count.draw}</span></div>
                    <div className={styles.counterCircle}>{props.circle} <span className={styles.value}>{props.count.circle}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Counter