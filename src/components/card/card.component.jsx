import React from 'react'
import '../card/card.styles.css'

export const Card = (props) => {
    return(
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`} alt="monster" />
            <h2 className='monster-name'>{props.monster.name}</h2>
            <p className='monster-email'>{props.monster.email}</p>
        </div>
    )
}