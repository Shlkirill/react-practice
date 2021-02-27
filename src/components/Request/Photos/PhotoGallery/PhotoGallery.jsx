import React, { useState } from 'react'
import styles from './PhotoGallery.module.css'
import Slider from 'react-slick'

const PhotoGallery = (props) => {

    const [sliderSettings, setSliderSettings] = useState({
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true
    })

    let arrPhotosList = props.photosList.map(item => {
        return <div className={styles.photo}>
            <img src={item.url} alt="" />
        </div>
    })

    console.log(arrPhotosList)
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.photos}>
                    <Slider {...sliderSettings}>
                            {arrPhotosList}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default PhotoGallery