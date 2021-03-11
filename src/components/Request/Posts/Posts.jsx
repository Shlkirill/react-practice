import React from 'react'
import { useState } from 'react/cjs/react.development'
import PostsModalWindow from './PostsModalWindow/PostsModalWindow'
import Post from './Post/Post'
import styles from './Posts.module.css'

const Posts = ({ postsList, deletPost, editPost, addPost }) => {

    let [cardSizeBig, setCardSizeBig] = useState(false)
    let [amountPosts, setAmountPosts] = useState(3)

    let сheckingForPosts = postsList.length !== 0;

    let [viewPost, setViewPost] = useState({
        title: '',
        body: '',
        postId: null,
        trigger: '',
        messages: '',
        show: false,
    })

    const onShowMore = () => {
        setAmountPosts(amountPosts + (cardSizeBig ? 4 : 3))
    }
    const onViewPost = (title, body, postId, trigger, messages) => {

        setViewPost({
            ...viewPost,
            title,
            body,
            postId,
            trigger,
            messages,
            show: true
        })
    }
    const onAddPost = () => {
        setViewPost({
            trigger: 'ADD',
            messages: 'gegegf',
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
    const onePost = postsList.map((item, index) => {
        if (index < amountPosts) return <Post key={item.id} id={item.id} postBody={item.body}
            postTitle={item.title} datePublisher={item.datePublisher} onViewPost={onViewPost} cardSizeBig={cardSizeBig} />
    })

    return (
        <div className={styles.main}>
            <div className={styles.main_navigationSizeCards }>
                <div>
                    <button className={styles.addPost} onClick={onAddPost}>Add post</button>
                </div>
                {сheckingForPosts && <div className={styles.hide_navigationResize}>
                    <button className={cardSizeBig && styles.main_buttonActive} onClick={onBigCard}>Make big cards</button>
                    <button className={!cardSizeBig && styles.main_buttonActive} onClick={onSmallCard}>Make small cards</button>
                </div>}
            </div>
            <div className={styles.main_container + ' ' + (cardSizeBig && styles.main_containerBigCard)}>
                { сheckingForPosts ? onePost : <p>There are no posts, add a new post</p>}
            </div>
            <div className={onePost[onePost.length - 1] == undefined && сheckingForPosts ? styles.main_showMoreContainer : styles.hide}>
                <button className={styles.main_showMore} onClick={onShowMore}>Show more</button>
            </div>
            {viewPost.show && <PostsModalWindow viewPost={viewPost} onCloseViewPost={onCloseViewPost} deletPost={deletPost} editPost={editPost} addPost={addPost}/>}
        </div>
    )
}

export default Posts