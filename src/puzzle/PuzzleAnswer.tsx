import React from 'react';
import './PuzzleAnswer.css';

export const USER_GUIDE_KEYWORD = 'Drag & Drop cards here';

function PuzzleAnswer() {
    return (
        <div className="puzzle-answer">
            <p>{`${USER_GUIDE_KEYWORD} to complete meaningful word.`}</p>
        </div>
    );
}

export default PuzzleAnswer;
