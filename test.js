import { barrtoa, atobarr } from '.';

let failed = 0;

[0, 0.5, 1].forEach(prob => [0, 1, 31, 32, 62, 63, 1025].forEach(len => {
    let boolarr = new Array(len).fill(0).map(() => Math.random() > prob);
    let ser = barrtoa(boolarr);
    let deser = atobarr(ser);
    boolarr.forEach((b, i) => b !== deser[i] && ++failed && console.log(
        'prob.', prob, 'len.', len, 'failed at index ->', i,
        '\nexpected', b,
        '\ngot', deser[i],
    ));
}));

if (failed) {
    console.log('\n' + failed, 'tests failed');
    process.exit(1);
}
