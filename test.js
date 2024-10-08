import { serialize, deserialize } from '.';

let failed = 0;
[0, 0.5, 1].forEach((prob) => {
    [0, 1, 31, 32, 62, 63, 1025].forEach((length) => {
        const boolarr = new Array((length)).fill(0)
            .map(() => Math.random() > prob);

        const ser = serialize(boolarr);
        const deser = deserialize(ser);

        if (deser.length !== boolarr.length) {
            console.log(
                'prob.', prob, 'len.', (length),
                'expected', boolarr.length,
                'got', deser.length,
            );

            failed++;

            return;
        }

        for (let i = 0; i < boolarr.length; i++) {
            if (boolarr[i] !== deser[i]) {
                console.log(
                    'prob.', prob, 'len.', (length), 'failed at index ->', i,
                    '\nexpected', boolarr[i],
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
