var myCurrentArray = new Array("apple", "banana", "apple", "orange", "banana", "apple");

var counts = {};

for (var i = 0; i < myCurrentArray.length; i++) {
    var key = myCurrentArray[i];
    counts[key] = (counts[key]) ? counts[key] + 1 : 1;
}

console.log(counts);

/*
 Object {
  apple: 3,
  banana: 2,
  orange: 1
}
*/

// reduceパターン
const counts2 = myCurrentArray.reduce((acc, val) => acc.includes(val) ? acc : [...acc, val], []);
console.log(counts2);


// 参考
const animals = [
  { 'id': 1, 'kind': 'dog' },
  { 'id': 2, 'kind': 'cat' },
  { 'id': 3, 'kind': 'birds' },
  { 'id': 4, 'kind': 'monkey' },
  { 'id': 5, 'kind': 'cat' },
  { 'id': 6, 'kind': 'dog' },
  { 'id': 7, 'kind': 'giraffe' },
  { 'id': 8, 'kind': 'birds' },
  { 'id': 9, 'kind': 'dog' },
  { 'id': 10, 'kind': 'dog' },
]

/*
reduce関数内の p x は任意の文字で構いません。 
p には戻りの配列、 x には現在の要素が入ります。
一番後ろにある [] は初期値です。ここで初期値を設定します。
(p.includes(x.kind)) ? p : [ ...p, x.kind ] で p の配列の中に x.kind が見つかればp を、見つからなければ p に x.kind を追加して返します。
[ ...p, x.kind] ここではスプレッド演算子を使用していますので、あまり知らないよって方はこちらをご確認ください。
*/
const list = animals.reduce((p, x) => p.includes(x.kind) ? p : [...p, x.kind], []);

console.log(list);
console.log(animals);
