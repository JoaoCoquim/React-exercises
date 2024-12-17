import React, {useState} from 'react'
import styles from './EmotionalButton.module.css'

function EmotionalButton() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        "https://as1.ftcdn.net/v2/jpg/02/95/26/46/1000_F_295264675_clwKZxogAhxLS9sD163Tgkz1WMHsq1RJ.jpg",
        "https://static.vecteezy.com/system/resources/previews/006/828/446/non_2x/an-angry-or-dissatisfied-face-emoji-free-vector.jpg",
        "https://cbx-prod.b-cdn.net/COLOURBOX3407129.jpg"
    ]

    const previousImg = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const nextImg = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    return (
        <>
            <button className={styles.borderedBtn} onClick={previousImg}>Previous</button>
            <img className={styles.imgContainer} src={images[currentIndex]} />
            <button className={styles.borderedBtn} onClick={nextImg}>Next</button>
        </>
    )
}

export default EmotionalButton