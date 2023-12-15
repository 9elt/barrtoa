# barrtoa

convert a bit array to a base64 string

```js
import { barrtoa, atobarr } from '@9elt/barrtoa';

barrtoa([
    true,  true,  false, false, false, false, false, false,
    true,  true,  false, false, false, false, true,  false,
    true,  false, false, true,  false, false, false, false,
    true,  false, true,  false, true,  true,  true,  true,
    false, false, true,  true,  false, true,  false, true,
    false, false, true,  true,  false, false, true,  true,
    true,  false, false, true,  false, false, false, true,
    true,  false, false, true,  false, false, true,  true
]);
// 'AcDCkK81M5GT'

atobarr('AcDCkK81M5GT');
// [ true, true, false, false, false, false, ... ]

```
