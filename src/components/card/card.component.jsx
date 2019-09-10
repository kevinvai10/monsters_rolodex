import React from 'react';
import '../card/card.style.css';
export const Card = (props) => {
    const {monster} = props;
    
    return(
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h1>{monster.name}</h1>
            <p>{monster.email}</p>
        </div>
    )
}