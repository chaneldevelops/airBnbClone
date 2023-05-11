import React from "react"

export default function Card(props) {
   // BADGE AREA 
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    } else if(props.price === 50) {
        badgeText = "POPULAR"
    }
    
    // CARD AREA
    // The {props.coverImg} for example is pulling from the data.jsx file
    /* Also the reason the spans have 3 properties is because they are nested in other tags/titles 
    in order to get to the main property for ex reviewCount is nexted in stats */
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`../images/${props.coverImg}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}