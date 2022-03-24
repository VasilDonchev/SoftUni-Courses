function circleAreaAndPerimeter(input) {

    let r = input[0];
     let area = Math.PI * Math.pow(r, 2);
     let perimeter = 2 * r * Math.PI;

     console.log(area.toFixed(2));
     console.log(perimeter.toFixed(2));
}
circleAreaAndPerimeter([4.5])