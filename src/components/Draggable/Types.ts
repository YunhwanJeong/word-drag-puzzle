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

export interface Bounds {
    x: number;
    y: number;
    width: number;
    height: number;
}
