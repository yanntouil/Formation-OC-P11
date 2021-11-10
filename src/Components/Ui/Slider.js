import React, {useState} from 'react'
import SliderButton from './SliderButton'

/**
 * Show and animate a pictures slider
 * @component
 * @param {string} {pictures}
 * @return {JSX} 
 */
export default function Slider({pictures}) {

    /** 
     * Slider animation state
     * @state
     * @const {string} sliderAnimation
     * @const {funnction} setSliderAnimation
     */
    const [sliderAnimation, setSliderAnimation] = useState({
        index: 0,
        inProgress: false,
    })

    /**
     * Go to next slide
     * @returns {void}
     */
    const nextSlide = () => {
        if (sliderAnimation.inProgress) return
        let index = sliderAnimation.index
        if(sliderAnimation.index < pictures.length - 1) index++
        else index = 0
        setSliderAnimation({
            index: index,
            inProgress: true,
        })
        setTimeout(() => setSliderAnimation({
            index: index,
            inProgress: false,
        }), 400)
    }

    /**
     * Go to previous slide
     * @returns {void}
     */
    const previousSlide = () => {
        if (sliderAnimation.inProgress) return
        let index = sliderAnimation.index
        if(sliderAnimation.index > 0 ) index--
        else index = pictures.length - 1
        setSliderAnimation({
            index: index,
            inProgress: true,
        })
        setTimeout(() => setSliderAnimation({
            index: index,
            inProgress: false,
        }), 400)
    }

    return (
        <div className="slider">
            {pictures.map((picture, index) => sliderAnimation.index === index && (
                <div key={'slider-' + index} className="slider-picture">
                    <img src={picture} alt="" />
                </div>
            ))}
            <SliderButton direction="next" goTo={nextSlide} />
            <SliderButton direction="previous" goTo={previousSlide} />
            <div className="slider-counter">{sliderAnimation.index + 1} / {pictures.length}</div>
        </div>
    )
}
