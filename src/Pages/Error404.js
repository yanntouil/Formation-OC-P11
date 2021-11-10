import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Error404 extends Component {
    /**
     * Render
     * @return {JSX} 
     * @memberof Error404
     */
    render() {
        return (
            <div className="page-error404">
                <h1 className="page-error404-title">404</h1>
                <p className="page-error404-secondary">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="page-error404-link">Retourner sur la page d’accueil</Link>
            </div>
        )
    }
}
