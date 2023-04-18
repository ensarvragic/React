import React from 'react'
import './card.css'
import Image from '../images/BurjK.jpg'

const Card = ({title, about, price}) => {
    return(
        <div className="card">
                <img alt="" src={Image} />
        <div className='text-area'>
            <h1>{title}</h1>
            <span>{about}</span>
        </div>
        <div className="programming">
            <p>{title}</p>
            <p>- {price}</p>
        </div>
        </div>
    )
}

export default Card;