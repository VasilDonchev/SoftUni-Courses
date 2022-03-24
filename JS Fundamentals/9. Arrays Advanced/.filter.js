function arrDemo() {

    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.filter((element) => {
        if (element % 2 === 0); {
            return element;
        }
    });
    console.log(newArr); // [2, 4]
}
arrDemo();