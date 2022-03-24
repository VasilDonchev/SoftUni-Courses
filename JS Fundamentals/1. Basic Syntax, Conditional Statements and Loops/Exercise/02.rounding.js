function rounding(numb, precision) {
    numb = Number(numb);
    precision = Number(precision);

if (precision > 15) {
    precision = 15;
}
//numb = numb.toFixed(precision);
console.log(parseFloat(numb).toFixed(precision));
}
rounding(3.1415926535897932384626433832795, 2)