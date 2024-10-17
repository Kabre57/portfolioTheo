import React from 'react'

import Sidebar from './Sidebar'
import Intro from './Intro'
import About from './About'
import Services from './Services'
import CTA from './CTA'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'
import Copyright from './Copyright'

function App () {
    return(
        <div>
        <Sidebar />
        <div id="main-part">
            <div className="main-part-mobile">
                <i className="fa fa-bras"></i>
            </div>
            <Intro />
            <About />
            <Services />
            <CTA />
            <Work />
            <Contact />
            <Footer />
            <Copyright />
        </div>
    </div>
    )
}

export default App