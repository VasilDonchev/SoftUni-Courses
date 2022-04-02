function solve(input) {
let strArr = input.split('\\');
let file = strArr[strArr.length -1];
let index = file.lastIndexOf('.');
let fileName = file.split(".");
let fileExt = fileName.pop()
fileName = fileName.join(".")
console.log(`File name: ${fileName}
File extension: ${fileExt}
`);
}
solve('C:\\Internal\\training-internal\\Template.bat.pptx')