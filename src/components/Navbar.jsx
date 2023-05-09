import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img src="./images/airbnb-logo.png" className="nav--logo" />
            <input className="search" type="text" placeholder="Search.." />
        </nav>
    )
}