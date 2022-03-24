function arrDemo() {

    let arr = [4, 2, 5, 1, 3];
    let sortArr = arr.sort((a, b) => { // подаваме два параметъра

        return a - b; // [1,2,3,4,5] ASD

        return b - a; // [5,4,3,2,1] DSC

    });
    console.log(sortArr);

    let str = ['cariot', 'orange', 'apple'];
    let sortArr = arr.sort((a, b) => { // подаваме два параметъра

            return a.localCompare(b); // ['apple','cariot','orange'] ASD
            return b.localCompare(a); // ['orange','cariot','apple'] DSC
            return a.length - b.length; // ['apple','orange','cariot']
            //     5       6       6

        }
    
}
arrDemo();