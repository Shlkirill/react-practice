import React, { useState } from 'react'
import styles from './Staff.module.css'

const Staff = ({ staffList }) => {
    let allSalary = 0;
    let staffListArr = staffList.map((item) => {
        allSalary += item.daysWorked * item.rate
        return <tr>
            <td>{item.name}</td>
            <td>{item.daysWorked}</td>
            <td>{item.rate}</td>
            <td>{item.daysWorked * item.rate}</td>
        </tr>
    })
    return (
        <div>
            <h3>Задание № 1</h3>
            <div className={styles.contaiter}>
                <table >
                    <tr>
                        <th>Имя</th>
                        <th>Кол-во Дней</th>
                        <th>Ставка</th>
                        <th>Зарплата</th>
                    </tr>
                    {staffListArr}
                    <tr>
                        <th>Общая зп</th>
                        <td colSpan='3'>{allSalary}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Staff