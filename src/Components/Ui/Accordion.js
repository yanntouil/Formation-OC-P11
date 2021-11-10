import React, { Component } from 'react'
import chevronDownImg from "../../assets/images/chevron-down.svg"


/**
 * Show and animate an accordion
 * @component Accordion
 * @extends {Component}
 */
export default class Accordion extends Component {

    /**
     * Creates an instance of Accordion
     * @param {{string, JSX}} props
     * @constructor
     */
    constructor({title, children}) {
        super()
        this.title = title
        this.children = children
        this.contentRef = null

        /**
         * State show
         * @state
         */
        this.state = {
            show: false,
        }
    }

    /**
     * Toggle show state
     * @returns {void}
     * @memberof Accordion
     */
    toggleShow () {
        this.setState({
            show : !this.state.show
        })
    }

    /**
     * Get heigh of content element
     * @return {number} 
     * @memberof Accordion
     */
    getContentHeight () {
        return this.contentRef.scrollHeight;
    }

    /**
     * Render
     * @return {JSX} 
     * @memberof Accordion
     */
    render() {
        return (
            <div className={this.state.show ? 'accordion active' : 'accordion'}>
                <div 
                className="accordion-header"
                onClick={this.toggleShow.bind(this)}
                >
                    <span>{this.title}</span>
                    <img src={chevronDownImg} alt="Chevron" />
                </div>
                <div 
                className="accordion-content"
                ref={(ref) => this.contentRef = ref} 
                style={{height: this.state.show ? this.getContentHeight() : 0}}
                >
                    <div className="accordion-content-wrapper">{this.children}</div>
                </div>
            </div>
        )
    }
}
