function housePainting(input) {
    // input
    let x = input.shift();
    let y = input.shift();
    let h = input.shift();
    // calculations
    let squaresArea = x * x + (x * x - 2 * 1.2);
    let rectangularsAre = 2 * (x * y - 1.5 * 1.5);
    let roofRectangularsArea = 2 * x * y;
    let roofTriangelsArea = 2 * (x * h / 2);
    // print
    console.log(((squaresArea + rectangularsAre) / 3.4).toFixed(2));
    console.log(((roofRectangularsArea + roofTriangelsArea) / 4.3).toFixed(2));
 
}
housePainting([6, 10, 5.2]);
console.log( "----------" );
housePainting([10.25, 15.45, 8.88]);