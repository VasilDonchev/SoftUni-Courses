function countDown(x){
console.log(x);;
if(x>0) { 
    countDown(x-1); //  функцията вика себе си, докато се изпълни условието (х > 0)
}
}countDown(10);