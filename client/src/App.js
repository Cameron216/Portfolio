import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import ogImg from './assets/images/og-card.jpg';

function App() {
    return (
        <Router>
            <Helmet>
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Cameron Bailey Web Developer"
                />
                <meta name="twitter:description" content="Online portfolio" />
                <meta name="twitter:image" content={ogImg} />
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
