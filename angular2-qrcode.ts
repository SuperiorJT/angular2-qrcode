import {
    NgModule,
    Component,
    Input,
    ElementRef,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import * as QRious from 'qrious';

@Component({
    moduleId: 'module.id',
    selector: 'qr-code',
    template: ``
})
export class QRCodeComponent implements OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        if ('background' in changes ||
            'backgroundAlpha' in changes ||
            'foreground' in changes ||
            'foregroundAlpha' in changes ||
            'level' in changes ||
            'mime' in changes ||
            'padding' in changes ||
            'size' in changes ||
            'value' in changes ||
            'canvas' in changes) {
            this.generate();
        }
    }
    
    @Input() background: string = 'white';
    @Input() backgroundAlpha: number = 1.0;
    @Input() foreground: string = 'black';
    @Input() foregroundAlpha: number = 1.0;
    @Input() level: string = 'L';
    @Input() mime: string = 'image/png';
    @Input() padding: number = null;
    @Input() size: number = 100;
    @Input() value: string = '';

    @Input() canvas: boolean = false;


    constructor(private elementRef: ElementRef) {
    }

    generate() {
        try {
            let el: HTMLElement = this.elementRef.nativeElement;
            el.innerHTML = '';
            let qr = new QRious({
                background: this.background,
                backgroundAlpha: this.backgroundAlpha,
                foreground: this.foreground,
                foregroundAlpha: this.foregroundAlpha,
                level: this.level,
                mime: this.mime,
                padding: this.padding,
                size: this.size,
                value: this.value
            });
            
            if (this.canvas) {
                el.appendChild(qr.canvas);
            } else {
                el.appendChild(qr.image);
            }
        } catch (e) {
            console.error(`Could not generate QR Code: ${e.message}`);
        }
    }
}

@NgModule({
    exports: [QRCodeComponent],
    declarations: [QRCodeComponent],
    entryComponents: [QRCodeComponent]
})
export class QRCodeModule {
}
