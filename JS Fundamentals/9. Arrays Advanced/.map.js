function arrDemo() {

    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.map((element) => {
        return Math.pow(element, 2);
    });
    console.log(newArr); // [1, 4, 9, 16, 25]
}
arrDemo();