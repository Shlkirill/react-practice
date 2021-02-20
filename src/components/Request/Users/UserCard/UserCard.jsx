import React from 'react'
import styles from './UserCard.module.css'
import avatarNone from '../../../../img/users/userNoneAvatar.png'
import companyLogo from '../../../../img/users/logo-business.png'
import addressLogo from '../../../../img/users/addressLogo.png'

const UserCard = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <div className={styles.topInfo}>
                        <div className={styles.avatar}>
                            <img src={avatarNone} alt="" />
                        </div>
                        <div className={styles.topInfo_main}>
                            <h3 className={styles.userName}>{props.userName}</h3>
                            <p className={styles.name}>{props.name}</p>
                            <p className={styles.email}><span>Email: </span> {props.email}</p>
                            <p className={styles.phone}><span>Phone: </span> {props.phone}</p>
                            <p className={styles.website}> <span>Site: </span> {props.website}</p>
                        </div>
                    </div>
                    <div className={styles.dividingStrip}></div>
                    <div className={styles.bottomInfo}>
                        <div className={styles.company}>
                            <div className={styles.leftLogo}>
                                <img src={companyLogo} alt="" />
                                <div className={styles.leftLogo__dividingStrip}></div>
                            </div>
                            <div>
                                <p className={styles.company__item}>{props.company.bs}</p>
                                <p className={styles.company__item}>{props.company.catchPhrase}</p>
                                <p className={styles.company__item}>{props.company.name}</p>
                            </div>
                        </div>
                        <div className={styles.address}>
                            <div className={styles.leftLogo}>
                                <img src={addressLogo} alt="" />
                                <div className={styles.leftLogo__dividingStrip}></div>
                            </div>
                            <div>
                                <p className={styles.address__item}>{props.address.street}</p>
                                <p className={styles.address__item}>{props.address.suite}</p>
                                <p className={styles.address__item}>{props.address.city}</p>
                                <p className={styles.address__item}>{props.address.zipcode}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard