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
    const onChangeRate = (targetValue, trigger) => {
        let value = targetValue.replace(/\D/g, '')
        if (value.length == 2 && value[0] == 0) value = value.substring(1)
        if (value == '') value = 0;
        if (trigger == 'RATE') props.editValue(props.id, value, trigger)
        if (trigger == 'DAYS') props.editValue(props.id, value, trigger)
    }
    return (
        <tr key={props.id}>
            <td>{props.name}</td>
            <td className={styles.days}>{!editModeDays ?
                <div>{props.daysWorked} <FontAwesomeIcon icon={faPencilAlt} className={styles.edit} onClick={onEditDays} /></div> :
                <div><input type='text' min='0' value={props.daysWorked} className={styles.days_input} autoFocus={true} onChange={(e) => { onChangeRate(e.target.value, 'DAYS') }} onKeyDown={onEditDaysKeyDown} />
                    <FontAwesomeIcon icon={faCheckCircle} className={styles.edit} onClick={onEditDays} /></div>}</td>
            <td className={styles.rate}>{!editModeRate ?
                <div>{props.rate}<FontAwesomeIcon icon={faPencilAlt} className={styles.edit} onClick={onEditRate} /></div> :
                <div><input type='text' min='0' value={props.rate} autoFocus={true} className={styles.rate_input} onChange={(e) => { onChangeRate(e.target.value, 'RATE') }} onKeyDown={onEditRateKeyDown} />
                    <FontAwesomeIcon icon={faCheckCircle} className={styles.edit} onClick={onEditRate} /></div>}</td>
            <td>{props.daysWorked * props.rate}</td>
        </tr>
    )
}

export default Collaborator