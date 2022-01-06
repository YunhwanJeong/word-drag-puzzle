import React, {useEffect, useState} from 'react';
import './PuzzleBoxContainer.css';
import randomWords from 'random-words';
import {shuffleArray} from '../utils/ArrayUtils';
import Box from './Box';
import Draggable from '../components/Draggable/Draggable';

function PuzzleBoxContainer() {
    const [characters, setCharacters] = useState<string[]>([]);
    let draggingElement: HTMLElement | null = null;
    useEffect(() => {
        setCharacters(shuffleArray(randomWords().split('')));
    }, []);

    function onMouseDown(e: React.MouseEvent) {
        if (e.target instanceof HTMLElement) {
            draggingElement = e.target;
        }
    }

    function onMouseUp(e: React.MouseEvent) {
        if (draggingElement === null) return;
        if (e.target instanceof HTMLElement && draggingElement !== e.target) {
            const mouseupEvent = new MouseEvent('mouseup', {
                bubbles: true,
                cancelable: true,
                view: window,
            });
            draggingElement.dispatchEvent(mouseupEvent);
        }

        draggingElement = null;
    }

    const boxes = characters.map((c, i) => <Draggable key={`${c}${i}`}><Box character={c}/></Draggable>);
    return (
        <div className="puzzle-box-container">
            <div className="puzzle-box-wrapper" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>{boxes}</div>
        </div>
    );
}

export default PuzzleBoxContainer;
