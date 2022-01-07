import React from 'react';
import './Box.css';

function Box(props: { character: string }, ref: React.Ref<HTMLDivElement>) {
    return (
        <div {...props} ref={ref} className="box">
            <span className="box-character">{props.character}</span>
        </div>
    );
}

export default React.forwardRef(Box);
