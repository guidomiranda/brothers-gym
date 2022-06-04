import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/portada.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">BROTHERS GYM</h1>
            <p className="main-para text-center">Sentite diferente</p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">login</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>registrate </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    //background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}