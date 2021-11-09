import React, { Component } from 'react'
import { AccommodationsContext } from '../Context/AccommodationsContext'
import { Link } from 'react-router-dom'
import homeImg from "../assets/images/home.jpg"

export default class Home extends Component {
    render() {
        if (this.context.accommodations.length === 0) this.context.fetchAccommodations()
        return (
            <div className="page-home">
                <div className="page-home-header">
                    <img src={homeImg} alt="landscape" />
                    <h1 className="page-home-header-title">Chez vous, partout et ailleurs</h1>
                </div>
                {this.context.accommodations.length &&
                    <div className="page-home-list">
                        {this.context.accommodations.map((item) => (
                            <Link to={`/accommodation/${item.id}`} key={item.id} state={item}>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={item.cover} alt={item.title} />
                                    </div>
                                    <div className="card-header">
                                        {item.title}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                }
            </div>
        )
    }
}
Home.contextType = AccommodationsContext