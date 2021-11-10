import React from 'react'
import chevronLeftImg from "../../assets/images/chevron-left.svg"
import chevronRightImg from "../../assets/images/chevron-right.svg"

/**
 * Button use in slider component
 * @param {{string, function}} props
 * @return {JSX} 
 */
export default function SliderButton({direction, goTo}) {
    return (
        <button onClick={goTo} type="button" className={direction === 'next' ? 'slider-button next' : 'slider-button previous'}>
            <img 
            src={direction === 'next' ? chevronRightImg : chevronLeftImg}
            alt={direction === 'next' ? 'Next image' : 'Previous image'}
            />
        </button>
    )
}
