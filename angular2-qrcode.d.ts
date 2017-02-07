import { ElementRef, OnChanges, SimpleChanges, NgModule } from '@angular/core';
export declare class QRCodeComponent implements OnChanges {
    private elementRef;
    ngOnChanges(changes: SimpleChanges): void;
    background: string;
    backgroundAlpha: number;
    foreground: string;
    foregroundAlpha: number;
    level: string;
    mime: string;
    padding: number;
    size: number;
    value: string;
    canvas: boolean;
    constructor(elementRef: ElementRef);
    generate(): void;
}
@NgModule()
export declare class QRCodeModule {
}
