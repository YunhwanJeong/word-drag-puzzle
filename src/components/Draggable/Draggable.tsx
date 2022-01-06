import React, {useEffect, useState} from 'react';
import {createCSSTransform, createDraggableData, getControlPosition} from './PositionUtils';

export interface DraggableData {
    x: number;
    y: number;
}

export interface DraggableState {
    dragging: boolean;
    x: number;
    y: number;
    lastX: number;
    lastY: number;
}

const DEFAULT_DRAGGABLE_STATE = {
    dragging: false,
    x: 0,
    y: 0,
    lastX: NaN,
    lastY: NaN,
}

function Draggable({children}: { children: JSX.Element }) {
    const [state, setState] = useState(DEFAULT_DRAGGABLE_STATE);
    useEffect(() => {
        function handleDrag(e: MouseEvent) {
            e.preventDefault();
            const {x, y} = getControlPosition(e);
            const draggableData = createDraggableData(state, x, y);
            setState(prevState => Object.assign({}, prevState, {x: draggableData.x, y: draggableData.y}));
        }

        state.dragging && document.addEventListener('mousemove', handleDrag);

        return () => document.removeEventListener('mousemove', handleDrag);
    }, [state.dragging]);

    function handleDragStart(e: MouseEvent) {
        const {x, y} = getControlPosition(e);
        setState(prevState => Object.assign({}, prevState, {dragging: true, lastX: x, lastY: y}));
    }

    function handleDragEnd(e: MouseEvent) {
        const {x, y} = getControlPosition(e);
        setState(prevState => Object.assign({}, prevState, {dragging: false, lastX: x, lastY: y}));
    }

    function onMouseDown(e: MouseEvent) {
        return handleDragStart(e);
    }

    function onMouseUp(e: MouseEvent) {
        return handleDragEnd(e);
    }

    const style = createCSSTransform({x: state.x, y: state.y});

    return (
        React.cloneElement(React.Children.only(children), {
            onMouseDown,
            onMouseUp,
            style: {...children.props.tyle, ...style}
        })
    );
}

export default Draggable;
