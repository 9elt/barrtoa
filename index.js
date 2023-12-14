const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";

/**
 * @param {(boolean | 0 | 1)[]} boolarr 
 * @returns {string}
 */
export function barrtoa(boolarr) {
    let len = boolarr.length;
    const len_1 = len - 1;

    const digits = new Array(len);
    for (let i = 0; i < len; i++)
        digits[len_1 - i] = boolarr[i] ? 1 : 0;

    // fisrt digit is dummy to preserve trailing zeros
    digits.push(1);
    len++;

    let out = [];
    let pow = [1];
    for (let i = 0; i < len; i++) {
        if (digits[i])
            out = add(out, mul(digits[i], pow, 64), 64);
        pow = mul(2, pow, 64);
    }

    let res = ''
    for (let i = out.length; i >= 0; i--)
        res += DIGITS.charAt(out[i]);

    return res;
}

/**
 * @template {true | 1} [F=true]
 * @param {string} b64 
 * @param {F} fmt
 * @returns {F extends boolean ? boolean[] : (0 | 1)[]}
 */
export function atobarr(b64, fmt = true) {
    const len = b64.length;
    const len_1 = len - 1;

    const digits = new Array(len);
    for (let i = 0; i < len; i++)
        digits[len_1 - i] = DIGITS.indexOf(b64.charAt(i));

    let out = [];
    let pow = [1];
    for (let i = 0; i < len; i++) {
        if (digits[i])
            out = add(out, mul(digits[i], pow, 2), 2);
        pow = mul(64, pow, 2);
    }

    // fisrt digit is dummy to preserve trailing zeros
    out.pop();

    const olen = out.length;
    const olen_1 = olen - 1;

    const res = new Array(olen);

    if (fmt === 1)
        for (let i = 0; i < olen; i++)
            res[olen_1 - i] = out[i];
    else
        for (let i = 0; i < olen; i++)
            res[olen_1 - i] = out[i] === 1;

    return res;
}

/**
 * @param {number[]} a 
 * @param {number[]} b 
 * @param {number} base 
 * @returns {number[]}
 */
function add(a, b, base) {
    const max = Math.max(a.length, b.length);
    const sum = [];
    let c = 0;
    let i = 0;
    while ((c += (a[i] || 0) + (b[i] || 0)) || i < max) {
        sum.push(c % base);
        c = Math.floor(c / base);
        i++;
    }
    return sum;
}

/**
 * @param {number} a 
 * @param {number[]} b 
 * @param {number} base 
 * @returns {number[]}
 */
function mul(a, b, base) {
    if (a === 0)
        return [];
    let res = [];
    let pow = b;
    while (true) {
        if (a & 1)
            res = add(res, pow, base);
        if ((a >>= 1) === 0)
            break;
        pow = add(pow, pow, base);
    }
    return res;
}
