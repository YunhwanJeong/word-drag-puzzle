import {DraggableData, DraggableState} from './Draggable';

export function getControlPosition(e: MouseEvent) {
    const x = e.clientX + document.body.scrollLeft;
    const y = e.clientY + document.body.scrollTop;
    return {x, y};
}

export function createDraggableData(draggableState: DraggableState, x: number, y: number): DraggableData {
    const isFirst = Number.isNaN(draggableState.lastX);
    if (isFirst) {
        return {
            x,
            y,
        }
    } else {
        const deltaX = x - draggableState.lastX;
        const deltaY = y - draggableState.lastY;
        return {
            x: draggableState.x + deltaX,
            y: draggableState.y + deltaY,
        }
    }
}

export function createCSSTransform({x, y}: { x: number, y: number }) {
    return {transform: `translate(${x}px, ${y}px)`};
}
