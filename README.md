# ch-convert
ch-convert is a library for converting Simplified Chinese characters to Traditional and vice versa

# usage

To use the library, clone the project and:

```
var converter = require('converter.js');
```

Then to use the converter specify the flag you would like to use :

```
//converts simplified to traditional
var converted_string = converter.convert("some simplified character", converter.flagTrad);

//converts traditional to simplified
var converted_string = converter.convert("some traditional character", converter.flagSimp);
```
