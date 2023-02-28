import "./carrousel.css"
import {useState} from "react"

export default function Carrousel({sliderImage}) {

    const [currentPhoto, setCurrentPhoto] = useState(0)

    const nextPhoto = () => {
        setCurrentPhoto(currentPhoto + 1)
        if(currentPhoto === sliderImage.length - 1) { setCurrentPhoto(0) }
    }

    const previousPhoto = () => {
        setCurrentPhoto(currentPhoto - 1)
        if(currentPhoto === 0) { setCurrentPhoto(sliderImage.length - 1) }
    }


return(
    <div className="housing-img-container">
        <img src={sliderImage[currentPhoto]} alt="blabla title" />
        <div className='housing-arrow-container'>
            <img onClick={previousPhoto} className='housing-nav-arrow-left' src='/images/left-arrow.svg' alt='Previous'></img>
            <img onClick={nextPhoto} className='housing-nav-arrow-right' src='/images/left-arrow.svg' alt='Next'></img>
        </div>
        <p className="slide-count">{currentPhoto + 1} / {sliderImage.length}</p>
    </div>
    )
}