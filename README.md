# barrtoa

convert a bit array to a base 64 string

```js
import { barrtoa, atobarr } from '.';

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
// '0s32AaYRcV6j'

atobarr('0s32AaYRcV6j');
// [ true, true, false, false, false, false, ... ]

```
