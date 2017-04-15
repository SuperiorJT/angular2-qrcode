[![npm version](https://badge.fury.io/js/angular2-qrcode.svg)](https://badge.fury.io/js/angular2-qrcode)
# angular2-qrcode
angular2-qrcode is a component that you can easily integrate into your project. It relies on [qrious](https://github.com/neocotic/qrious) to generate QR Codes.

## Breaking Changes for 2.0.0

`data` has been replaced with `value`. For those that don't need the new features of `2.0.0`, just keep using `1.0.5`. No change will be needed unless you upgrade.

The `type` field has also been removed.

## Install
    
    npm install angular2-qrcode

### Woah! What's this NPM ERROR?
You will most likely get an npm error during the install process. QRious has an optional dependency for node-canvas, which requires cairo to build. We don't need this dependency, but there is no way to declare that in `package.json` right now. **Feel free to ignore it.**
## How To Use

### Import into your NgModule

```
import { NgModule } from '@angular/core';
import { QRCodeModule } from 'angular2-qrcode';

...

@NgModule({
    imports: [
        QRCodeModule,
        ...
    ]
})
```

In component template:
```
<div>
    <qr-code [value]="'All QR Code data goes here!'" [size]="150"></qr-code>
</div>
```

## Parameters

| Attribute        | Type           | Default | Description  |
| ------------- |-------------| -----|------------|
| value      | String | '' | Your data string |
| size      | Number | 100     | This is the height/width of your QR Code component |
| level | String | 'L'    | QR Correction level ('L', 'M', 'Q', 'H') |
| background | String | 'white' | The color for the background |
| backgroundAlpha | Number | 1.0 | The opacity of the background |
| foreground | String | 'black' | The color for the foreground |
| foregroundAlpha | Number | 1.0 | The opacity of the foreground |
| mime | String | 'image/png' | The mime type for the output image |
| padding | Number | null | The padding around the QR Code |
| canvas | Boolean | false | Will output a canvas element if true |

## License
MIT License
