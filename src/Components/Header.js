import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        //Using BEM Convention for CSS
        <div className="header">
            <div className="header__left">
                <h2>Challenge App</h2>
            </div>

            <div className="header__right">
                <h4 className="header__product">Product</h4>
                <h4>Download</h4>
                <h4>Pricing</h4>
            </div>
        </div>
    )
}

export default Header
