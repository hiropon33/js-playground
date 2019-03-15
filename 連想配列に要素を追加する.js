var obj0 = { a: 'a0', b: 'b0' };
var obj1 = { a: 'a1', b: 'b1' };
var obj2 = { a: 'a2', b: 'b2' };
var obj3 = { a: 'a3', b: 'b3' };

var arr = [obj0, obj1, obj2, obj3];

// 連想配列に要素を追加する
arr.reduce((prev, obj, i) => obj.c = 'c' + i, []);

console.log(arr);


/*
$ node any.js
[ { a: 'a0', b: 'b0', c: 'c0' },
  { a: 'a1', b: 'b1', c: 'c1' },
  { a: 'a2', b: 'b2', c: 'c2' },
  { a: 'a3', b: 'b3', c: 'c3' } ]
*/

// map
var arr2 = [obj0, obj1, obj2, obj3];
arr2.map((obj, i) => { obj.d = 'd' + i; return obj });
console.log(arr2);