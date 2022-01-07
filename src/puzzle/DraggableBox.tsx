import React, {useRef} from 'react';
import Draggable from '../components/Draggable/Draggable';
import Box from './Box';

function DraggableBox({character}: {character: string}) {
    const nodeRef = useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <Box ref={nodeRef} character={character}/>
        </Draggable>
    );
}

export default DraggableBox;
