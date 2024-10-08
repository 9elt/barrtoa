export default class BoolBytes {
    static serialize(arr: boolean[]): string {
        let result = "";

        const length = Math.ceil((arr.length + 1) / 8);

        for (let x = 0; x < length; x++) {
            const x1 = x * 8;

            let byte = 0;
            for (let y = 0; y < 8; y++) {
                const xy = x1 + y;

                if (arr[xy]
                    // NOTE: The last byte is always true,
                    // and indicates the end of the array
                    || xy === arr.length) {
                    byte += 1 << y;
                }
            }

            result += String.fromCharCode(byte);
        }

        return result;
    }

    static deserialize(bytes: string): boolean[] {
        const result = new Array<boolean>(bytes.length * 8);

        let lastTrue = 0;

        for (let x = 0; x < bytes.length; x++) {
            const byte = bytes.charCodeAt(x);

            for (let y = 0; y < 8; y++) {
                const xy = (x * 8) + y;

                if (result[xy] = ((1 << y) & byte) !== 0) {
                    lastTrue = xy;
                }
            }
        }

        result.length = lastTrue;

        return result;
    }
}
