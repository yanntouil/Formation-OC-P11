import React from "react";







/**
 * @const
 */
export const AccommodationsContext = React.createContext()

/**
 * Wrap accommodation context
 * @component
 */
export default class AccommodationsContextProvider extends React.Component {

    /**
     * Creates an instance of AccommodationsContextProvider
     * @constructor
     * @param {object} props
     * @param {JSX} props.children
     */
    constructor(props) {
        super(props)
        /**
         * State
         */
        this.state = {
            accommodations: [],
        }
    }

    /**
     * Fetch accommodations from api and set data in state
     * @return {void}
     * @memberof AccommodationsContextProvider
     */
    fetchAccommodations = () => {
        try {
            fetch(process.env.PUBLIC_URL + '/api/data.json')
            .then((response => response.json()))
            .then(data => this.setState({accommodations: data}))
        } catch(error)  {
            console.log(error)
        }
    }

    /**
     * Render
     * @return {JSX} 
     * @memberof AccommodationsContextProvider
     */
    render() {
        return (
            <AccommodationsContext.Provider value={{
                accommodations: this.state.accommodations,
                fetchAccommodations: this.fetchAccommodations,
            }}>
                {this.props.children}
            </AccommodationsContext.Provider>
        )
    }
}