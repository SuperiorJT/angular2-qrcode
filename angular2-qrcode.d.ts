import { ElementRef, OnInit } from '@angular/core';
export declare class QRCodeComponent implements OnInit {
    private elementRef;
    data: string;
    size: number;
    type: number;
    level: string;
    private qr;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
}
export declare class QRCodeModule { }
