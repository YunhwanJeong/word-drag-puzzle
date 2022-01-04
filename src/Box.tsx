import React from 'react';
import './Box.css';

function Box({character}: {character: string}) {
    return (
        <div className='box'>
            <span className='box-character'>{character}</span>
        </div>
    );
}

export default Box;
