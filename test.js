import { serialize, deserialize } from '.';

let failed = 0;
[0, 0.5, 1].forEach((prob) => {
    [0, 1, 31, 32, 62, 63, 1025].forEach((length) => {
        const booleans = new Array(length)
            .fill(0)
            .map(() => Math.random() > prob);

        const ser = serialize(booleans);

        const expectedLength = Math.ceil((length + 1) / 8);

        if (ser.length !== expectedLength) {
            console.log(
                'prob.', prob, 'len.', length, 'bytes length ->',
                '\nexpected', expectedLength,
                '\ngot', ser.length,
            );

            failed++;

            return;
        }

        const deser = deserialize(ser);

        if (deser.length !== booleans.length) {
            console.log(
                'prob.', prob, 'len.', length, 'deserialized length ->',
                '\nexpected', booleans.length,
                '\ngot', deser.length,
            );

            failed++;

            return;
        }

        for (let i = 0; i < booleans.length; i++) {
            if (booleans[i] !== deser[i]) {
                console.log(
                    'prob.', prob, 'len.', (length), 'failed at index ->', i,
                    '\nexpected', booleans[i],
                    '\ngot', deser[i],
                );

                failed++;
            }
        }
    });
});

if (failed) {
    console.log('\n' + failed, 'tests failed');
    process.exit(1);
}
