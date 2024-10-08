# Bool Bytes

Serialize (and deserialize) a boolean array to string bytes, storing 1 boolean per bit, for the lowest space usage

```ts
import BoolBytes from "@9elt/boolbytes";

const booleans = [
    true, false, false, true, false, false, true, true,
    true, true, false, false, false, true, false, true,
    true, false, true, false, false, false, true, true,
    false, true, false, true, false, true, false, true,
];

const bytes = BoolBytes.serialize(booleans);
// "É£Åª"

BoolBytes.deserialize(bytes);
// [true, false, false, true, false, false, true, ...
```
