import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.scss';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Pages/Home.js'
import Accommodation from './Pages/Accommodation';
import AboutUs from './Pages/AboutUs.js';
import Error404 from './Pages/Error404.js';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/accommodation" exact element={<Accommodation />} />
            <Route path="/about-us" exact element={<AboutUs />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
