import React from 'react'
import {useTransition, animated} from 'react-spring'
import { useState } from 'react/cjs/react.development'
import BlockInfo from './BlockInfo/BlockInfo'
import styles from './Main.module.css'

const Main = ({ postsList }) => {

    let [amountPosts, setAmountPosts] = useState(3)
    
    const transitions = useTransition(postsList, item => item.id, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { width: '300px' },
        leave: { width: '1300px' },
    })
    let a = transitions.map(({ item, props, key }) => {

    if (item.id <= amountPosts)    return <animated.div >
            <BlockInfo key={key} style={props} id={item.id} postBody={item.body} postTitle={item.title} />
        </animated.div>
    })

    const onePost = postsList.map(item => {
        if (item.id <= amountPosts) return <BlockInfo key={item.id} id={item.id} postBody={item.body} postTitle={item.title} />
    })

    const onShowMore = () => {
        setAmountPosts(amountPosts + 3)
    }
    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                {a}
            </div>
            <div className={styles.main_showMoreContainer}>
                <button className={styles.main_showMore} onClick={onShowMore}>Show more</button>
            </div>
        </div>
    )
}

export default Main