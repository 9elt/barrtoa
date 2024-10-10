export function serialize(arr: boolean[]): string {
    let bytes = "";

    const length = Math.ceil((arr.length + 1) / 8);

    for (let x = 0; x < length; x++) {
        const x1 = x * 8;

        let byte = 0;

        for (let y = 0; y < 8; y++) {
            const xy = x1 + y;

            if (arr[xy]
                // NOTE: We set the very last bit true,
                // to indicate the end of the array
                || xy === arr.length) {
                byte += 1 << y;
            }
        }

        bytes += String.fromCharCode(byte);
    }

    return bytes;
}

export function deserialize(bytes: string): boolean[] {
    const arr = new Array<boolean>(bytes.length * 8);

    let length = 0;

    for (let x = 0; x < bytes.length; x++) {
        const x1 = x * 8;

        const byte = bytes.charCodeAt(x);

        for (let y = 0; y < 8; y++) {
            const xy = x1 + y;

            arr[xy] = ((1 << y) & byte) !== 0;

            if (arr[xy]) {
                length = xy;
            }
        }
    }

    arr.length = length;

    return arr;
}
