import React from 'react';
import './card-box.css'

function CardBox({
    user: { username, age }
}) {
    return (
        <div className='cardBox'>
            <h1>{ username }</h1>
            <p>{ age } anos</p>
        </div>
    )
}

export default CardBox;