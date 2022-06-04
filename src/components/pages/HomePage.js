import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../assets/images/logo.jpg'

export default function HomePage() {
    return (
        <div className="text-center">
            <h5 className="main-title home-page-title">Bienvenidos a Brothers Gym System</h5>




            <div>
                <h5>Che ha'aromina Fabioliiiiin agaite oimbatama nde sistema ikatu io jajajaja</h5>
                <Link to="/">
                    <button className="primary-button">Log out</button>
                </Link>
            </div>
        </div>
    )
}
