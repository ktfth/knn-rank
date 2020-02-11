'use strict'
const root = exports;

const knn = require('knn-uniq');
const assert = require('assert');

const rank = root.rank = (o, l) => {
    let out = [];
    l.map(v => {
        out.push(knn.neighbor(o, v));
    });
    return out;
};
assert.deepEqual(rank({a: 1, b: 2, c: 3}, [{a: 1, b: 2}, {c: 3}]), [knn.neighbor({a: 1, b: 2, c: 3}, {a: 1, b: 2}), knn.neighbor({a: 1, b: 2, c: 3}, {c: 3})]);
