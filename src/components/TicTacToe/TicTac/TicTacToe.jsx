import React, { useState } from 'react'
import styles from './TicTacToe.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

let times = <FontAwesomeIcon className={styles.times} icon={faTimes} />
let circle = <div className={styles.circle}></div>

let winningCombination = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 6], [3, 5, 7]]

const TikTakToe = () => {
    let stateArr = [{ id: 1, times: false, circle: false },
    { id: 2, times: false, circle: false },
    { id: 3, times: false, circle: false },
    { id: 4, times: false, circle: false },
    { id: 5, times: false, circle: false },
    { id: 6, times: false, circle: false },
    { id: 7, times: false, circle: false },
    { id: 8, times: false, circle: false },
    { id: 9, times: false, circle: false }]


    let [state, setState] = useState(stateArr);
    let [priorityCircle, setPriorityCircle] = useState(true);
    let [combinationX, setCombinationX] = useState([]);
    let [combinationO, setCombinationO] = useState([]);

    let onClickZone = (e) => {
        let stateCopy = state.map(item => {
            if (e.target.id == item.id && item.times == false && item.circle == false) {
                if (priorityCircle) {
                    debugger
                    item.circle = true
                    setCombinationO([...combinationO, item.id])
                    console.log(combinationO)
                    setPriorityCircle(false)
                } else {
                    item.times = true
                    setCombinationX([...combinationX, item.id])
                    setPriorityCircle(true)
                }
            }
            return item
        })
        setState(stateCopy);
    }
    let renderState = state.map(item => {
        return (
            <div className={styles.zone} id={item.id} key={item.id} onClick={onClickZone}>
                {item.times && times}
                {item.circle && circle}
            </div>
        )
    })

    return (
        <div className={styles.container}>
            <div className={styles.tikTakToe}>
                {renderState}
            </div>
        </div>
    )
}

export default TikTakToe