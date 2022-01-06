import React from 'react';
import PuzzleAnswer from './PuzzleAnswer';
import PuzzleBoxContainer from './PuzzleBoxContainer';
import './Puzzle.css';

function Puzzle() {
    return (
        <div className="puzzle">
            <PuzzleAnswer/>
            <PuzzleBoxContainer/>
        </div>
    );
}

export default Puzzle;
