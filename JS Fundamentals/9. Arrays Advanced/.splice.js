function arrDemo() {
    
    let arr = [1,2,3,4,5];
    arr.push(99); // добавяне накрая на масива [1,2,3,4,5,99]
    arr.unshift(0); // добавя в началотото на масива [0,1,2,3,4,5,99]
    arr.pop(); // премахва последния елемент в масива [0,1,2,3,4,5]
    arr.shift(); // премахва първия елемент в масива [1,2,3,4,5]
    
    let index = arr.indexOf(2) // 1 - взимаме индекса на 2
    arr.splice(index,0 ,77); // [1,77,2,3,4,5] - // вмъкваме 77 на 1-ви индекс
    
    let copyArr = arr.slice(0); // копиране на arr в copyArr
    let splicedArr = arr.splice()

    console.log(arr);
}