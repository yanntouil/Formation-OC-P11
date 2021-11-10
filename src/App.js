import { Component } from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'//BrowserRouter
import AccommodationsContextProvider from './Context/AccommodationsContext'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Home from './Pages/Home.js'
import Accommodation from './Pages/Accommodation'
import AboutUs from './Pages/AboutUs.js'
import Error404 from './Pages/Error404.js'
import './App.scss'


/**
 * @component
 */
export default class App extends Component {
    /**
     * Render
     * @return {JSX}
     * @memberof App
     */
    render() {
        return (
            <AccommodationsContextProvider>
                <Router>
                    <Header />
                    <main className="main">
                        <Routes>
                            <Route path="/" exact element={<Home />} />
                            <Route path="/accommodation/:id" exact element={<Accommodation />} />
                            <Route path="/about-us" exact element={<AboutUs />} />
                            <Route path="/404" exact element={<Error404 />} />
                            {/* <Route path="*" element={<Error404 />} /> */}
                        </Routes>
                    </main>
                    <Footer />
                </Router>
            </AccommodationsContextProvider>
        )
    }
}