import React from 'react'
import "./Card.css"

const Card = ({gender ,id,  title, first, last , email}) => {

 
    return (
        //Using BEM Convention
        <div  className="card">
            <p className="card__gender">{gender === "male" ? "Male" : "Female"} - NL</p>
            <h3 className="card__name">{title} {first} {last}</h3>
            <p className="card__email">{email}</p>
        </div>
    )
}

export default Card
