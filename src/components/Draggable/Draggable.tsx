import React, {useEffect, useRef, useState} from 'react';
import {calculateTranslatePosition, createCSSTransform, createDraggableData, getControlPosition} from './Utils';
import {Bounds} from './Types';

interface Props {
    children: JSX.Element;
    nodeRef: React.RefObject<HTMLElement>;
}

const DEFAULT_BOUNDS = {x: 0, y: 0, width: 0, height: 0};

const DEFAULT_DRAGGABLE_STATE = {
    dragging: false,
    x: 0,
    y: 0,
    lastX: NaN,
    lastY: NaN,
}

function Draggable({children, nodeRef}: Props) {
    const [state, setState] = useState(DEFAULT_DRAGGABLE_STATE);
    const bounds = useRef<Bounds>(DEFAULT_BOUNDS);
    useEffect(() => {
        function handleDrag(e: MouseEvent) {
            e.preventDefault();
            const {x, y} = getControlPosition(e);
            const draggableData = createDraggableData(state, {x, y});
            setState(prevState => Object.assign({}, prevState, {x: draggableData.x, y: draggableData.y}));
        }

        state.dragging && document.addEventListener('mousemove', handleDrag);

        return () => document.removeEventListener('mousemove', handleDrag);
    }, [state.dragging]);
    useEffect(() => {
        if (nodeRef.current === null) return;
        const {x, y, width, height} = nodeRef.current.getBoundingClientRect();
        bounds.current = {x, y, width, height};
    }, []);


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
        if (!state.dragging) return;
        return handleDragEnd(e);
    }

    const position = calculateTranslatePosition({x: state.x, y: state.y}, bounds.current);
    const style = createCSSTransform({x: position.x, y: position.y});
    return (
        React.cloneElement(React.Children.only(children), {
            onMouseDown,
            onMouseUp,
            style: {...children.props.tyle, ...style}
        })
    );
}

export default Draggable;
