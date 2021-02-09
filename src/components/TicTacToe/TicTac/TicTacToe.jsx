import React, { useEffect, useState } from 'react'
import styles from './TicTacToe.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild, faDesktop, faSmileBeam, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Transition } from 'react-spring/renderprops'
import Counter from '../TicTacToe_Counter/Counter'

let times = <FontAwesomeIcon className={styles.times} icon={faTimes} />
let circle = <div className={styles.circle}></div>
let child = <FontAwesomeIcon className={styles.child} icon={faChild} />
let desktop = <FontAwesomeIcon className={styles.desktop} icon={faDesktop} />
let smille = <FontAwesomeIcon className={styles.smille} icon={faSmileBeam} />

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

    let countValue = { times: 0, circle: 0, draw: 0 }

    let [state, setState] = useState(stateArr);
    let [priorityCircle, setPriorityCircle] = useState(false);
    let [combinationX, setCombinationX] = useState([]);
    let [combinationO, setCombinationO] = useState([]);
    let [winnerIndicator, setWinnerIndicator] = useState(false);
    let [winnerIndicatorTwo, setWinnerIndicatorTwo] = useState(false);
    let [drawIndicator, setDrawIndicator] = useState(false);
    let [winnerID, setWinnerID] = useState(null);
    let [winnerForm, setWinnerForm] = useState('');
    let [count, setCount] = useState(countValue);
    let [opponentChoosingDisplay, setOpponentChoosingDisplay] = useState(true)
    let [opponentDesktop, setOpponentDesktop] = useState(false)

    useEffect(() => {
        if (combinationX.length >=3) victoryCheck()
    }, [combinationX])

    useEffect(() => {
        if (combinationO.length >=3) victoryCheck()
    }, [combinationO])

    // useEffect(() => {
    //     if (priorityCircle) onClickZoneVSDesktop()
    // },[priorityCircle])

    const courseBot = () => {
        if (priorityCircle) {
            let whileValue = true;
            while (whileValue) {
                console.log('1')
                let randomId = Math.floor(1 + Math.random() * (9 + 1 - 1)) + ""
                state.map(item => {
                    if (randomId == item.id && item.times == false && item.circle == false) {
                        item.circle = true
                        setCombinationO([...combinationO, item.id])
                        setPriorityCircle(false)
                        whileValue = false;
                        return
                    }
                    if (combinationO.length + combinationX.length == 8) whileValue = false
                })
            }
        }
    }

    let clearFild = () => {
        setTimeout(() => {
            setWinnerIndicatorTwo(true)
            setTimeout(() => {
                setState(stateArr);
                setWinnerIndicator(false);
                setWinnerIndicatorTwo(false)
                setCombinationX([]);
                setCombinationO([]);
                setWinnerID(null);
                setDrawIndicator(false)
                setPriorityCircle(false);
                setWinnerForm('')
            }, 3000);
        }, 3000);
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
                setWinnerForm(priorityCircle ? 'times' : 'circle')
                priorityCircle ? setCount({ ...count, times: count.times + 1 }) :
                    setCount({ ...count, circle: count.circle + 1 })
                finish = true
            }
            winnerX = 0;
            winnerO = 0;
        })
        // if (priorityCircle && !finish) {
        //     onClickZoneVSDesktop()
        // }
        if ((combinationO.length + combinationX.length) == 9 && !finish) {
            clearFild()
            setWinnerIndicator(true)
            setDrawIndicator(true)
            setCount({ ...count, draw: count.draw + 1 })
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
    let onClickZoneVSDesktop = (e) => {
        if (winnerIndicator) return
        if (priorityCircle) {
            courseBot()
        } else {
            state.map(item => {
                if (e.target.id == item.id && item.times == false && item.circle == false) {
                    item.times = true
                    setCombinationX([...combinationX, item.id])
                    setPriorityCircle(true)
                }
                return item
            })
        }
    }

const onOpponentChoosing = (e) => {
    if (e.currentTarget.dataset.opponent == 'desktop') setOpponentDesktop(true)
    setOpponentChoosingDisplay(false)
}

let renderState = state.map(item => {
    return (
        <div className={styles.zone + " " + (winnerIndicator && styles.zoneWiner)} id={item.id}
            key={item.id} onClick={opponentDesktop ? onClickZoneVSDesktop : onClickZone}>
            {item.times && times}
            {item.circle && circle}
        </div>
    )
})
return (
    <div>
        <div className={styles.container}>
            <div className={styles.priorityInfo_wrapper}>
                <div className={styles.priorityInfo}>
                    {!winnerIndicator ?
                        !opponentChoosingDisplay ? <div className={styles.priorityInfo_unWinner}>
                            <div className={styles.priorityInfo_title}>Ход:</div>
                            <div className={styles.priorityInfo_icon}>{priorityCircle ? circle : times}</div>
                        </div> : <div className={styles.priorityInfo_titleVS}> ? vs ?</div>
                        : smille}
                </div>
            </div>
            <div className={styles.tikTakToe_wrapper}>
                <p className={styles.tikTakToe_tittleOpponent}>{!opponentChoosingDisplay && (opponentDesktop ? <span>{child} vs {desktop}</span> : <span>{child} vs {child}</span>)} </p>
                <Transition
                    items={!winnerIndicatorTwo}
                    from={{ position: 'absolute', opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}>
                    {toggle =>
                        toggle
                            ? props => <div style={props} className={styles.tikTakToe}>
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
                                        <div className={styles.lineDiagonal_left + " " + (winnerID == 6 && (priorityCircle ? styles.lineHideBlue : styles.lineHideYellow))}></div>
                                        <div className={styles.lineDiagonal_right + " " + (winnerID == 7 && (priorityCircle ? styles.lineHideBlue : styles.lineHideYellow))}></div>
                                    </div>
                                </div>
                            </div>
                            : props => <div style={props} className={styles.winner_container}>
                                {!drawIndicator ?
                                    <div>
                                        <div className={styles.winner_icon}>{(winnerForm == 'times' && times) || (winnerForm == 'circle' && circle)}</div>
                                        <p className={(winnerForm == 'times' && styles.winner_textTimes) || (winnerForm == 'circle' && styles.winner_textCircle)}>{winnerForm !== '' && "ПОБЕДИТЕЛЬ!"}</p>
                                    </div> :
                                    <div>
                                        <div className={styles.draw_icon} >
                                            {times} {circle}
                                        </div>
                                        <p className={styles.draw_text}>НИЧЬЯ!</p>
                                    </div>
                                }
                            </div>}
                </Transition>
            </div>
        </div>
        <Counter times={times} circle={circle} count={count} />
        {opponentChoosingDisplay && <div className={styles.choosingOpponent_wrapper}>
            <div className={styles.choosingOpponent_container}>
                <p className={styles.choosingOpponent_info}>Выберете оппонента :</p>
                <div className={styles.choosingOpponent}>
                    <button className={styles.choosingOpponent_buttonChild} onClick={onOpponentChoosing} data-opponent={'child'}>{child} vs {child}</button>
                    <button className={styles.choosingOpponent_buttonDesktop} onClick={onOpponentChoosing} data-opponent={'desktop'}>{child} vs {desktop}</button>
                </div>
            </div>
        </div>}
    </div>
)
}

export default TikTakToe