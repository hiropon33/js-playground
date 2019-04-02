var text = '0120510230';
console.log(text.substr(0, 6));

var lines = ['1','0120510230'];

console.log(lines[1].split('').filter((val) => val > 5).length);