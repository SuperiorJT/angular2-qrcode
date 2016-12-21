import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class QRCodeComponent implements OnChanges {
    private elementRef;
    ngOnChanges(changes: SimpleChanges): void;
    data: string;
    size: number;
    type: number;
    level: string;
    constructor(elementRef: ElementRef);
    generate(): void;
}
export declare class QRCodeModule {
}
