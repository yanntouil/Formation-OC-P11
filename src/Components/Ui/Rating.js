import React from 'react'
import starFullImg from "../../assets/images/star-full.svg"
import starEmptyImg from "../../assets/images/star-empty.svg"

/**
 * Show rating on 5 
 * @param {{number}} props
 * @return {JSX} 
 */
export default function Rating({stars}) {
    const rate = []
    for(let i = 1; i <= 5; i++) {
        rate.push(i <= stars)
    }
    return (
        <ul className="rating">
            { rate.map((star, index) => (
                <li className={star ? 'rating-star active' : 'rating-star'} key={`star-${index}`}>
                    <img src={star ? starFullImg : starEmptyImg} alt={star ? 'Star full' : 'Star empty'} />
                </li>
            ))}
        </ul>
    )
}
