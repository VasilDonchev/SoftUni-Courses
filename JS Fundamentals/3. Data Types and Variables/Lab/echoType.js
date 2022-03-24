function echo(input) {
  // let dataType = input;

  if (typeof input == "string") {
    console.log("string");
    console.log(input);
  } else if (typeof input == "number") {
    console.log("number");
    console.log(input);
  } else {
    console.log("object");
    console.log("Parameter is not suitable for printing");
  }
}
echo("Hello, JavaScript!");
echo(18);
echo(null);
