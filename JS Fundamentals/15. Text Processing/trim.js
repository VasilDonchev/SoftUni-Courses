let str = '   \n \t\t some text \t\r   ';

console.log('->' + str + '<-');
console.log('->' + str.trim() + '<-');
console.log('->' + str.trimStart() + '<-');
console.log('->' + str.trimEnd() + '<-');