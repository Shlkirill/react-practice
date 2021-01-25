import React, { useEffect, useState } from 'react'
import styles from './TicTacToe.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

let times = <FontAwesomeIcon className={styles.times} icon={faTimes} />
let circle = <div className={styles.circle}></div>

let winningCombination = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

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
    let [priorityCircle, setPriorityCircle] = useState(false);
    let [combinationX, setCombinationX] = useState([]);
    let [combinationO, setCombinationO] = useState([]);
    let [winnerIndicator, setWinnerIndicator] = useState(false);

    useEffect(() => {
        if (combinationX.length >= 3 || combinationO.length >= 3) victoryCheck()
    })

    let clearFild = () => {
        debugger
        setTimeout(() => {
            setState(stateArr)
            setCombinationX([])
            setCombinationO([])
            setWinnerIndicator(false)
            setPriorityCircle(false)
        }, 3000);
    }

    const victoryCheck = () => {
        winningCombination.forEach((itemWinArr) => {
            console.log('fwefwe')
            let winnerX = 0
            let winnerO = 0
            itemWinArr.forEach(itemWin => {
                if (combinationX.includes(itemWin)) winnerX++
                if (combinationO.includes(itemWin)) winnerO++
            })
            if (winnerX == 3) {
                setWinnerIndicator(true)
                clearFild()
            }
            if (winnerO == 3) {
                setWinnerIndicator(true)
                clearFild()
            }
            winnerX = 0;
            winnerO = 0;
        })
    }

    let onClickZone = (e) => {
        state.map(item => {
            if (e.target.id == item.id && item.times == false && item.circle == false) {
                if (priorityCircle) {
                    item.circle = true
                    setCombinationO([...combinationO, item.id])
                    setPriorityCircle(false)
                } else {
                    item.times = true
                    setCombinationX([...combinationX, item.id])
                    setPriorityCircle(true)
                }
            }
            return item
        })
    }

    let renderState = state.map(item => {
        return (
            <div className={styles.container}>
                <div className={styles.zone + " " + (winnerIndicator && styles.zoneWiner)} id={item.id} key={item.id} onClick={!winnerIndicator && onClickZone}>
                    {item.times && times}
                    {item.circle && circle}
                </div>
                <div className={styles.zone + " " + styles.zoneAbsolute }>

                </div>
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