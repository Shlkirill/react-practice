import React from 'react'
import { useTransition, animated } from 'react-spring'
import { useState } from 'react/cjs/react.development'
import BlockInfo from './BlockInfo/BlockInfo'
import styles from './Main.module.css'

const Main = ({ postsList }) => {

    let [amountPosts, setAmountPosts] = useState(3)
    let [viewPost, setViewPost] = useState({
        title: '',
        body: '',
        show: false
    })
    const onShowMore = () => {
        setAmountPosts(amountPosts + 3)
    }
    const onViewPost = (title, body) => {

        setViewPost({
            ...viewPost,
            title,
            body,
            show: true
        })
    }
    const onCloseViewPost = () => {
        setViewPost({
            ...viewPost,
            show: false
        })
    }
    console.log(viewPost)
    const transitions = useTransition(postsList, item => item.id, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { width: '300px' },
        leave: { width: '1300px' },
    })
    let a = transitions.map(({ item, props, key }) => {

        if (item.id <= amountPosts) return <animated.div >
            <BlockInfo key={key} style={props} id={item.id} postBody={item.body}
                postTitle={item.title} onViewPost={onViewPost} />
        </animated.div>
    })
    const onePost = postsList.map(item => {
        if (item.id <= amountPosts) return <BlockInfo key={item.id} id={item.id} postBody={item.body} postTitle={item.title} />
    })

    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                {a}
            </div>
            <div className={a[a.length-1] == undefined ? styles.main_showMoreContainer : styles.hide}>
                <button className={styles.main_showMore} onClick={onShowMore}>Show more</button>
            </div>
            <div className={viewPost.show ? styles.viewModal : styles.hide}>
                <div className={styles.viewModal_wrapper}>
                    <h3>{viewPost.title}</h3>
                    <p>{viewPost.body}</p>
                    <div className={styles.viewModal_navigation}>
                        <button onClick={onCloseViewPost}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main