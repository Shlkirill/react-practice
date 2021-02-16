import React from 'react'
import { useTransition, animated } from 'react-spring'
import { useState } from 'react/cjs/react.development'
import ModalWindow from '../ModalWindow/ModalWindow'
import BlockInfo from './BlockInfo/BlockInfo'
import styles from './Home.module.css'

const Home = ({ postsList }) => {
    let [cardSizeBig, setCardSizeBig] = useState(false)
    let [amountPosts, setAmountPosts] = useState(3)
    let [viewPost, setViewPost] = useState({
        title: '',
        body: '',
        trigger: '',
        messages: '',
        show: false
    })

    const onShowMore = () => {
        setAmountPosts(amountPosts + (cardSizeBig ? 4 : 3))
    }
    const onViewPost = (title, body, trigger, messages) => {

        setViewPost({
            ...viewPost,
            title,
            body,
            trigger,
            messages,
            show: true
        })
    }
    const onCloseViewPost = () => {
        setViewPost({
            ...viewPost,
            show: false
        })
    }
    const onBigCard = () => {
        setCardSizeBig(true)
    }
    const onSmallCard = () => {
        setCardSizeBig(false)
    }
    const transitions = useTransition(postsList, item => item.id, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { width: '300px' },
        leave: { width: '1300px' },
    })

    let a = transitions.map(({ item, props, key }) => {

        if (item.id <= amountPosts + cardSizeBig && 1) return <animated.div >
            <BlockInfo key={key} style={props} id={item.id} postBody={item.body}
                postTitle={item.title} onViewPost={onViewPost} cardSizeBig={cardSizeBig} />
        </animated.div>
    })
    const onePost = postsList.map(item => {
        if (item.id <= amountPosts) return <BlockInfo key={item.id} id={item.id} postBody={item.body} postTitle={item.title} />
    })

    return (
        <div className={styles.main}>
            <div className={styles.main_navigationSizeCards + ' ' + styles.hide_navigationResize}>
                <button className={cardSizeBig && styles.main_buttonActive} onClick={onBigCard}>Make big cards</button>
                <button className={!cardSizeBig && styles.main_buttonActive} onClick={onSmallCard}>Make small cards</button>
            </div>
            <div className={styles.main_container + ' ' + (cardSizeBig && styles.main_containerBigCard)}>
                {a}
            </div>
            <div className={a[a.length - 1] == undefined ? styles.main_showMoreContainer : styles.hide}>
                <button className={styles.main_showMore} onClick={onShowMore}>Show more</button>
            </div>
            <ModalWindow viewPost={viewPost} onCloseViewPost={onCloseViewPost} />
        </div>
    )
}

export default Home