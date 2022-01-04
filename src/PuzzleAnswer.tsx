import React from 'react';
import './PuzzleAnswer.css';

export const USER_GUIDE_KEYWORD = 'Drag & Drop the cards here';

function PuzzleAnswer() {
    return (
        <div className='puzzle-answer'>
            <p>{`${USER_GUIDE_KEYWORD} to make phrases that make sense!`}</p>
        </div>
    );
}

export default PuzzleAnswer;
