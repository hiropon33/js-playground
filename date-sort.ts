let arr = [
    {
        "date": "2015/05/14 20:02:02",
        "content": "hogehoge"
    },
    {
        "date": "2015/05/15 06:02:02",
        "content": "hogehoge"
    },
    {
        "date": null,
        "content": "hogehoge"
    },
    {
        "date": "2015/05/12 10:02:02",
        "content": "hogehoge"
    }
];

// nullを除外
arr = arr.filter(data => data.date != null);
// 送信日時を新しい順に並べる
arr = arr.sort((a, b) => (a.date < b.date ? 1 : -1));

console.log(arr);

