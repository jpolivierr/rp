import React from 'react'
import './Showcase.css'
// import Button from '../../Util/Button/Button'
// import Navigation from '../00-Navigation/Navigation'
// import SectionTitle from '../../Util/SectionTitle/SectionTitle'
import Search from '../00-Search/Search'
import {Link} from 'react-router-dom'

 function Showcase() {
    return (
                <div className="Showcase">
                    <div className="big-logo">
                    </div>
                  <div className="Sidebar">
                  <div className="Logo">
                   <div className="logoimg">
                   </div>
                      </div>
                      <div className="Social">
                       <div className="Sc-box">
                      <i className="fab fa-facebook-f"></i>
                      <i className="fab fa-instagram"></i>
                      <i className="fab fa-twitter"></i>
                      <i className="fab fa-linkedin-in"></i>
                       </div>
                      </div>
                      <p>SCROLL &nbsp;  DOWN &nbsp; &nbsp;<i className="fas fa-chevron-down"></i></p>
                  </div>
                <div className="Main-section">
                    <div className="container">
                      <div className="main-section-box">
                        <h1>
                        Reviving Homes, Restoring <br/> Communities
                    </h1>
                    <Link to='/about'>
                      {/* <Button type= 'main' 
                                label='Learn More' 
                                color='white'
                                backcolor = 'var(--main-color)'
                                /> */}
                    </Link>
                  
                    </div>
                    </div>
                    <Search/>
                </div>
                </div>
    )
}

export default Showcase