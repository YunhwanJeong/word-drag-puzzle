import React from 'react';
import './Box.css';

function Box(props: {character: string}) {
    return (
        <div {...props} className="box">
            <span className="box-character">{props.character}</span>
        </div>
    );
}

export default Box;
