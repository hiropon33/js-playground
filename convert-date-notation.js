
// 同期処理なファイル読み込み関数
// flagはこちらを参照※https://nodejs.org/api/fs.html#fs_file_system_flags
const fs = require('fs');
const msg = fs.readFileSync("/Users/Hiroki/PlayGround/js-examples/text_box/hoge.txt", { encoding: "utf-8", flag: "a" });
console.log(msg);

// 非同期なファイル読み込み関数
// const fs = require('fs');

// let msg = '';
// fs.readFile('hoge.txt', 'utf-8', (err, data) => {
//     // 例外処理
//     if (err) { throw err; }

//     msg = data;
//     console.log(msg);
// });

// console.log('ファイル読み込み中でも処理が走ります。');

function main() {
    // read the string filename
    const filename = readLine();

    let results = {};

    // ファイル読み込み
    fs.readFile(filename, 'utf8', (err, text) => {
        // 行テキストの配列を得る
        let lines = text.split(/\n/);

        // 重複するホスト名をカウント
        for (let i in lines) {
            let host = lines[i].split(" ")[0];
            results[host] = (results[host]) ? results[host] + 1 : 1;
        }
    });

    let result_text = "";
    for (let host_name in results) {
        result_text += host_name + " " + results[host_name];
    }

    // ファイル出力
    const file = 'records_hosts_access_log_00.txt';
    fs.writeFile(file, result_text, {}, () => {
        fs.close(file, () => { });
    });
}


