[![npm version](https://badge.fury.io/js/angular2-qrcode.svg)](https://badge.fury.io/js/angular2-qrcode)
# angular2-qrcode
angular2-qrcode is a component that you can easily integrate into your project. It relies on [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator) to generate QR Codes.

## Install
    
    npm install angular2-qrcode

## How To Use

### Include the component and declare it as Directive

```
import {Component, OnInit} from '@angular/core';
import {QRCodeComponent} from 'angular2-qrcode'

@Component({
  selector: 'my-qr-code-component',
  directives: [QRCodeComponent],
  template: `
    <div>
      <qr-code [data]="'All QR Code data goes here!'" [size]="150"></qr-code>
    </div>
  `
})
```

## Parameters

| Attribute        | Type           | Default | Description  |
| ------------- |-------------| -----|------------|
| data      | String | '' | Your data string |
| size      | Number | 128     | This is the height/width of your QR Code component |
| level | String | 'M'    | QR Correction level ('L', 'M', 'Q', 'H') |
| type | Number | 4 | Buffer size for data string

## Note

If you have `code length overflow` errors, you need to increase the `[type]` value to increase the buffer for your data string.

## License
MIT License