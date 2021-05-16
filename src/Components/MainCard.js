import React from 'react'
import "./MainCard.css"

const MainCard = ({title,first, last,postcode, city, state, country, image, gender,offset, description }) => {
    
    

    return (
        <div className="mainCard">
            <img src={image}/>
            <div className="mainCard__details">
                <h1>{title} {first} {last}</h1>
                <div className="mainCard__info">
                    <p> <strong>{postcode}</strong> {city},{state},<strong> {country}</strong>  </p>
                    <p>{offset} {description} </p>
                    <p className="mainCard__gender">{gender === "male" ? "Male" : "Female"}</p>
                </div>
            </div>
        </div>
    )
}

export default MainCard
