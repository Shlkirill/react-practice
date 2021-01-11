import { faCheckCircle, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Collaborator from './Collaborator/Collaborator';
import styles from './Staff.module.css'


const Staff = ({staffList, ...props}) => {
    let allSalary = 0;
    let staffListArr = staffList.map((item) => {
        allSalary += item.daysWorked * item.rate
        return <Collaborator key={item.id} id={item.id} name={item.name} daysWorked={item.daysWorked} rate={item.rate} editValue={props.editValue}/>
    })

    return (
        <div>
            <h3>Задание № 1 (Посчет ЗП работников)</h3>
            <div className={styles.contaiter}>
                <table >
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Кол-во Дней</th>
                            <th>Ставка</th>
                            <th>Зарплата</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffListArr}
                        <tr>
                            <th>Общая зп</th>
                            <td colSpan='3'>{allSalary}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Staff