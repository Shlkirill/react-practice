import { faCheckCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import styles from './Collaborator.module.css'


const Collaborator = (props) => {
    let [editModeDays, setEditModeDays] = useState(false);
    let [editModeRate, setEditModeRate] = useState(false);

    const onEditDays = () => {
        setEditModeDays(!editModeDays)
    }
    const onEditRate = () => {
        setEditModeRate(!editModeRate)
    }
    const onEditDaysKeyDown = (e) => {
        if (e.code == 'Enter' || e.code == 'NumpadEnter') setEditModeDays(!editModeDays)
    }
    const onEditRateKeyDown = (e) => {
        if (e.code == 'Enter' || e.code == 'NumpadEnter') setEditModeRate(!editModeRate)
    }
    const onChangeRate = (e) => {
        props.editValue(props.id, +e.target.value || '', 'RATE')
    }
    const onChangeDays = (e) => {
        props.editValue(props.id, +e.target.value || '', 'DAYS')
    }
    return (
        <tr key={props.id}>
            <td>{props.name}</td>
            <td className={styles.days}>{!editModeDays ?
                <div>{props.daysWorked} <FontAwesomeIcon icon={faPencilAlt} className={styles.edit} onClick={onEditDays} /></div> :
                <div><input type='number' min='0' value={props.daysWorked} className={styles.days_input} autoFocus={true} onChange={onChangeDays} onKeyDown={onEditDaysKeyDown} />
                    <FontAwesomeIcon icon={faCheckCircle} className={styles.edit} onClick={onEditDays} /></div>}</td>
            <td className={styles.rate}>{!editModeRate ?
                <div>{props.rate}<FontAwesomeIcon icon={faPencilAlt} className={styles.edit} onClick={onEditRate} /></div> :
                <div><input type='number' min='0' value={props.rate} autoFocus={true} className={styles.rate_input} onChange={onChangeRate} onKeyDown={onEditRateKeyDown} />
                    <FontAwesomeIcon icon={faCheckCircle} className={styles.edit} onClick={onEditRate} /></div>}</td>
            <td>{props.daysWorked * props.rate}</td>
        </tr>
    )
}

export default Collaborator