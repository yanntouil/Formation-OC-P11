import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { AccommodationsContext } from '../Context/AccommodationsContext'
import { useParams  } from 'react-router-dom'
import Slider from '../Components/Ui/Slider'
import Rating from '../Components/Ui/Rating'
import Accordion from '../Components/Ui/Accordion'


export default function Accommodation() {
    const [accommodation, setAccommodation] = useState()
    const location = useLocation()
    const context = useContext(AccommodationsContext)
    const navigate = useNavigate()
    const params = useParams();

    useEffect(() => {
        if (location.state) setAccommodation(location.state)// Set from state
        else if (context.accommodations && context.accommodations.length) {// Set from context
            const itemFinded = context.accommodations.find(el => el.id === params.id)
            itemFinded ? setAccommodation(itemFinded) : navigate('/404');// set or redirect 404
        } else context.fetchAccommodations()// Fetch data
    }, [location, context, params, navigate])


    return accommodation ? (
        <div className="accommodation">
            <Slider pictures={accommodation.pictures} />
            <div className="accommodation-header">
                <div className="accommodation-header-1">
                    <h1 className="accommodation-header-title">{accommodation.title}</h1>
                    <p className="accommodation-header-secondary">{accommodation.location}</p>
                    <ul className="accommodation-header-tags">
                        { accommodation.tags.map((tag, index) => (
                            <li className="accommodation-header-tag" key={`tag-${index}`}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="accommodation-header-2">
                    <div className="accommodation-header-host">
                        <div className="accommodation-header-host-name">{accommodation.host.name}</div>
                        <div className="accommodation-header-host-picture">
                            <img src={accommodation.host.picture} alt={accommodation.host.name} />
                        </div>
                    </div>
                    <Rating stars={accommodation.rating} />
                </div>
            </div>
            <div className="accommodation-content">
            <div className="accommodation-content-description">
                    <Accordion title="Description">
                        {accommodation.description}
                    </Accordion>
                </div>
                <div className="accommodation-content-equipments">
                    <Accordion title="Équipements">
                        <ul>
                        {accommodation.equipments.map((equipment, index) => (
                            <li key={`equipment-${index}`} className="accommodation-content-equipment">
                                {equipment}
                            </li>
                        ))}
                        </ul>
                    </Accordion>
                </div>
            </div>
        </div>
    ) : <></>
}