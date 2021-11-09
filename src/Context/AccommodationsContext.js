import React from "react";








export const AccommodationsContext = React.createContext()

export default class AccommodationsContextProvider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            accommodations: [],
        }
        this.fetchAccommodations = () => {
            try {
                fetch(process.env.PUBLIC_URL + '/api/data.json')
                .then((response => response.json()))
                .then(data => this.setState({accommodations: data}))
            } catch(error)  {
                console.log(error)
            }
        }
    }

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