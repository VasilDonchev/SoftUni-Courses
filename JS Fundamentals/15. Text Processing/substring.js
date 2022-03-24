// let str = 'I am JavaScript developer';
// console.log(str.indexOf('Java')); // [5]
// console.log(str.indexOf('java')); // -1  (липсва) няма съвпадение

// let str2 = 'Intro to programming'

// console.log(str2.lastIndexOf('o')); // 11

// let sub = str2.substring(5, 10); // "JavaS"
// console.log(str2.substring(10, 5)); // "JavaS"

function subString(str, start, count) {
    console.log(str.substring(start, count + start));
    
}
subString('ASentence', 1, 8);
subString('SkipWord', 4, 7);