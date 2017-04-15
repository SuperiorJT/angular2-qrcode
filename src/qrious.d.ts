interface QRiousCanvasElement extends HTMLCanvasElement {
    qrious: QRious;
}

interface QRiousImageElement extends HTMLImageElement {
    qrious: QRious;
}

declare class QRious {
    background: string;
    backgroundAlpha: number;
    foreground: string;
    foregroundAlpha: number;
    level: string;
    mime: string;
    padding: number;
    size: number;
    value: string;

    canvas: QRiousCanvasElement;
    image: QRiousImageElement;

    constructor(options: {
        background: string,
        backgroundAlpha: number,
        foreground: string,
        foregroundAlpha: number,
        level: string,
        mime: string,
        padding: number,
        size: number,
        value: string
    });
}


export default QRious;