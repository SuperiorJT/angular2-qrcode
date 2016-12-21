import {
    NgModule,
    Component,
    Input,
    ElementRef,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import * as qrcode from "qrcode-generator";

@Component({
    moduleId: 'module.id',
    selector: 'qr-code',
    template: ''
})
export class QRCodeComponent implements OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        if ('data' in changes) {
            this.generate();
        }
    }

    @Input() data: string = '';
    @Input() size: number = 128;
    @Input() type: number = 4;
    @Input() level: string = 'M';


    constructor(private elementRef: ElementRef) {
    }

    generate() {
        try {
            let qr = qrcode(this.type, this.level);
            qr.addData(this.data);
            qr.make();

            let imgTagString = qr.createImgTag(this.type, 0);
            let el: HTMLElement = this.elementRef.nativeElement;
            el.innerHTML = imgTagString;
            let imgTagObject: HTMLImageElement = <HTMLImageElement> el.firstElementChild;
            imgTagObject.width = this.size;
            imgTagObject.height = this.size;
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
