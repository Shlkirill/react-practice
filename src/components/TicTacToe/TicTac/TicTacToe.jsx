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
    let [winnerIndicatorTwo, setWinnerIndicatorTwo] = useState(false);
    let [winnerID, setWinnerID] = useState(null);

    useEffect(() => {
        if (combinationO.length >= 3) { victoryCheck() }
    }, [combinationO])

    useEffect(() => {
        if (combinationX.length >= 3) { victoryCheck() }
    }, [combinationX])

    let clearFild = () => {
        setTimeout(() => {
            setWinnerIndicatorTwo(true)
        }, 3000);
        setTimeout(() => {
            setState(stateArr);
            setCombinationX([]);
            setCombinationO([]);
            setWinnerIndicator(false);
            setWinnerIndicatorTwo(false)
            setPriorityCircle(false);
            setWinnerID(null);
        }, 6000);
    }

    const victoryCheck = () => {
        let finish = false

        winningCombination.forEach((itemWinArr, index) => {
            let winnerX = 0
            let winnerO = 0
            itemWinArr.forEach(itemWin => {
                if (combinationX.includes(itemWin)) winnerX++
                if (combinationO.includes(itemWin)) winnerO++
            })
            if (winnerX == 3 || winnerO == 3) {
                setWinnerIndicator(true)
                setWinnerID(index)
                clearFild()
                finish = true
            }
            winnerX = 0;
            winnerO = 0;
        })

        if ((combinationO.length + combinationX.length) == 9 && !finish) {
            clearFild()
            setWinnerIndicator(true)
        }

    }

    let onClickZone = (e) => {
        if (winnerIndicator) return

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
            <div className={styles.zone + " " + (winnerIndicator && styles.zoneWiner)} id={item.id} key={item.id} onClick={onClickZone}>
                {item.times && times}
                {item.circle && circle}
            </div>
        )
    })
    return (
        <div className={styles.container}>
            <div className={styles.tikTakToe_wrapper}>
                {!winnerIndicatorTwo ?
                    <div className={styles.tikTakToe}>
                        {renderState}
                        <div className={styles.allLineWrapper + " " + (winnerID == null && styles.allLineHide)}>
                            <div className={styles.winLineHorizontal_wrapper}>
                                <div className={styles.lineHorizontal + " " + (winnerID == 0 && (priorityCircle ? styles.lineHideBlue : styles.lineHideYellow))}></div>
                                <div className={styles.lineHorizontal + " " + (winnerID == 1 && (priorityCircle ? styles.lineHideBlue : styles.lineHideYellow))}></div>
                                <div className={styles.lineHorizontal + " " + (winnerID == 2 && (priorityCircle ? styles.lineHideBlue : styles.lineHideYellow))}></div>
                            </div>
                            <div className={styles.winLineVertical_wrapper}>
                                <div className={styles.lineVertical + " " + (winnerID == 3 && (priorityCircle ? styles.lineHideBlue : styles.lineHideYellow))}></div>
                                <div className={styles.lineVertical + " " + (winnerID == 4 && (priorityCircle ? styles.lineHideBlue : styles.lineHideYellow))}></div>
                                <div className={styles.lineVertical + " " + (winnerID == 5 && (priorityCircle ? styles.lineHideBlue : styles.lineHideYellow))}></div>
                            </div>
                            <div className={styles.winLineDiagonal_wrapper}>
                                <div className={styles.lineDiagonal_right + " " + (winnerID == 6 && (priorityCircle ? styles.lineHideBlue : styles.lineHideYellow))}></div>
                                <div className={styles.lineDiagonal_left + " " + (winnerID == 7 && (priorityCircle ? styles.lineHideBlue : styles.lineHideYellow))}></div>
                            </div>
                        </div>
                    </div> :
                    <div className={styles.winner_container}>
                        <div className={styles.winner_icon}>{priorityCircle ? times : circle}</div>
                        <p className={priorityCircle ? styles.winner_textTimes : styles.winner_textCircle}>ПОБЕДИТЕЛЬ!</p>
                    </div>}
            </div>
        </div>
    )
}

export default TikTakToe