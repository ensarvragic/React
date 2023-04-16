import React from 'react'
import './card.css'
import Image from '../images/BurjK.jpg'

const Card = (props) => {
    return(
        <div className="card">
                <img alt="" src={Image} />
        <div className='text-area'>
            <h1>{props.title}</h1>
            <span>{props.about}</span>
        </div>
        <div className="programming">
            <p>{props.title} </p>
            <p>- {props.price}</p>
        </div>
        </div>
    )
}

export default Card;