import React, {useEffect, useState} from 'react';
import './PuzzleBoxContainer.css';
import randomWords from 'random-words';
import {shuffleArray} from '../utils/ArrayUtils';
import Box from './Box';
import Draggable from '../components/Draggable/Draggable';

function PuzzleBoxContainer() {
    const [characters, setCharacters] = useState<string[]>([]);

    useEffect(() => {
        setCharacters(shuffleArray(randomWords().split('')));
    }, []);

    const boxes = characters.map((c, i) => <Draggable key={`${c}${i}`}><Box character={c}/></Draggable>);
    return (
        <div className="puzzle-box-container">
            <div className="puzzle-box-wrapper">{boxes}</div>
        </div>
    );
}

export default PuzzleBoxContainer;
