# Bool Bytes

Serialize (and deserialize) a boolean array into string bytes, storing 1 boolean per bit

```ts
import { deserialize, serialize } from "@9elt/boolbytes";

const booleans = [
    true, false, false, true, false, false, true, true,
    true, true, false, false, false, true, false, true,
    true, false, true, false, false, false, true, true,
    false, true, false, true, false, true, false, true,
];

const bytes = serialize(booleans);
// "É£Åª"

deserialize(bytes);
// [true, false, false, true, false, false, true, ...
```
