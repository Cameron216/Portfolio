import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
    const gaTractingId = 'UA-96112620-2';
    ReactGA.initialize(gaTractingId);
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <Router>
            <Helmet>
                <title>Cameron Bailey || Frontend Developer</title>
            </Helmet>
            <div className="container">
                <Sidebar />

                <div className="mainContent-container">
                    {/* Routes */}
                    <Route path="/" exact component={Home} />
                    <Route path="/about/" component={About} />
                    <Route path="/skills/" component={Skills} />
                    <Route path="/portfolio/" component={Portfolio} />
                    <Route path="/contact/" component={Contact} />
                </div>
            </div>
        </Router>
    );
}

export default App;
