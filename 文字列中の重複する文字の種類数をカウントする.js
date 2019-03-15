// 文字列中の重複す文字の種類数をカウントする

const input = "aaabbcdefgg";    // except 3

let duplicateStrs = [];

let array = input.split('');    // 配列に変換
array.forEach((val, i) => {
    // 既出の文字を除外
    if (!duplicateStrs.includes(val)) {
        let arr = array;    // 初期化
        arr.splice(i, 1);   // 現在の文字を削除
        // 重複する文字が存在する場合は、重複リストに追加
        if (arr.includes(val)) duplicateStrs.push(val);
    }
});

console.log(duplicateStrs.length);

// var dubList = [];
// input.split('').reduce((acc, val) => {
//     console.log(acc);
    
//     if (acc.includes(val)) {
//         console.log(val);
        
//         count++;
//         console.log(count);
//         return acc;
//     } else return [...acc, val];
// }, []);
// console.log(count);




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

const list = animals.reduce((p, x) => (p.indexOf(x.kind) !== -1) ? p : [...p, x.kind], [])

