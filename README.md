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
var converted_string = converter.convert("some simplified character string", converter.Trad());

//converts traditional to simplified
var converted_string = converter.convert("some traditional character string", converter.Simp());
```

If the converter does not find a matching character, it will just return that same character.
This works well for texts that have both English and Chinese characters in them.
# credits

Special thanks http://siongui.github.io/ for the conversion tables
