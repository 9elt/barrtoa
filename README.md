# Bool Bytes

Convert a boolean array to string bytes and vice versa, for the lowest space usage

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
