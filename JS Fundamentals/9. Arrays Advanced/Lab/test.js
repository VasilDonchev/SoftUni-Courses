let arr = [4, 19, 2, 53, 6, 43];
function remove(num) {
  arr = arr.filter((el) => el !== num);
  console.log(arr);
}
//remove(2);

function removeAt(index) {
  arr.splice(index, 1);
  console.log(arr);

}
//removeAt(1);

function splice() {
  let indexOfElement = arr.indexOf(53);
  arr.splice(indexOfElement,1,10,20);
console.log(arr);
}
//arraysDemo();

function filter() {
  let arr = [5,'e',['1,2,3'],{},"#"];
  let newArr = arr.filter((el)=>{
    if (typeof el !== 'number'){
      return el;

    }
  });
  console.log(newArr);
}
filter();