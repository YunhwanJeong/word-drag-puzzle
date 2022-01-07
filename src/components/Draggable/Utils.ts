import {Bounds, DraggableData, DraggableState} from './Types';

export function getControlPosition(e: MouseEvent): DraggableData {
    const x = e.clientX + document.body.scrollLeft;
    const y = e.clientY + document.body.scrollTop;
    return {x, y};
}

export function createDraggableData(draggableState: DraggableState, {x, y}: DraggableData): DraggableData {
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

export function calculateTranslatePosition(mousePosition: DraggableData, bounds: Bounds): DraggableData {
    const minX = -bounds.x;
    const minY = -bounds.y;
    const maxX = document.body.clientWidth - bounds.x - bounds.width;
    const maxY = document.body.clientHeight - bounds.y - bounds.height;
    const x = Math.min(Math.max(minX, mousePosition.x), maxX);
    const y = Math.min(Math.max(minY, mousePosition.y), maxY);
    return {x, y};
}

export function createCSSTransform({x, y}: DraggableData) {
    return {transform: `translate(${x}px, ${y}px)`};
}
