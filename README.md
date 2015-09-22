# ch-convert
ch-convert is a library for converting Simplified Chinese characters to Traditional and vice versa. This module is simply a serverside transformation of sionguis clientside library.

# usage

To use the library, clone the project and:

```
var converter = require('converter.js');
```

Then to use the converter specify the flag you would like to use :

```
//converts simplified to traditional
var converted_string = converter.convert("some simplified character", converter.Trad);

//converts traditional to simplified
var converted_string = converter.convert("some traditional character", converter.Simp);
```

# credits

Special thanks http://siongui.github.io/ for the conversion tables
