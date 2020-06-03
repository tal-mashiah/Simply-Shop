import React from 'react'

export default function Hamburger({toggleBurgerModal}) {
    return (
        <button className="nav-hamburger" onClick={toggleBurgerModal}>
            <span></span><span></span><span></span>
        </button>
    )
}
