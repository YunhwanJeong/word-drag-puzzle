import React, {useEffect, useRef, useState} from 'react';
import './PuzzleBoxContainer.css';
import randomWords from 'random-words';
import {shuffleArray} from '../utils/ArrayUtils';
import DraggableBox from './DraggableBox';

function PuzzleBoxContainer() {
    const [characters, setCharacters] = useState<string[]>([]);
    const draggingElement = useRef<HTMLElement | null>(null);
    useEffect(() => {
        setCharacters(shuffleArray(randomWords().split('')));
    }, []);

    function onMouseDown(e: React.MouseEvent) {
        if (e.target instanceof HTMLElement) {
            draggingElement.current = e.target;
        }
    }

    function onMouseUp(e: React.MouseEvent) {
        if (draggingElement.current === null) return;
        if (e.target instanceof HTMLElement && draggingElement.current !== e.target) {
            const mouseupEvent = new MouseEvent('mouseup', {
                bubbles: true,
                cancelable: true,
                view: window,
            });
            draggingElement.current.dispatchEvent(mouseupEvent);
        }

        draggingElement.current = null;
    }

    const boxes = characters.map((c, i) => <DraggableBox key={`${c}${i}`} character={c}/>);
    return (
        <div className="puzzle-box-container">
            <div className="puzzle-box-wrapper" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>{boxes}</div>
        </div>
    );
}

export default PuzzleBoxContainer;
