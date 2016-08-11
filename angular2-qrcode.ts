import {
    NgModule,
    Component,
    Input,
    ElementRef,
    OnInit
} from '@angular/core';
import qrcode = require('qrcode-generator');

@Component({
    selector: 'qr-code',
    template: ''
})
export class QRCodeComponent implements OnInit {

    @Input() data: string = '';
    @Input() size: number = 128;
    @Input() type: number = 4;
    @Input() level: string = 'M';

    private qr: QRCode;

    constructor(
        private elementRef: ElementRef
    ) {}

    ngOnInit() {
        try {
            this.qr = qrcode(this.type, this.level);
            this.qr.addData(this.data);
            this.qr.make();

            let imgTagString = this.qr.createImgTag(this.type, 0);
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
    exports: [ QRCodeComponent ],
    declarations: [ QRCodeComponent ],
    entryComponents: [ QRCodeComponent ]
})
export class QRCodeModule { }