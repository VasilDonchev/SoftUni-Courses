function listOfProducts(arr){
    let sorted = arr.sort((a,b)=>{ // сортиране по азбучен ред = ascending order
        return a.localeCompare(b);
    });
    //console.log(sorted);
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i+1}.${sorted[i]}`);
        
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);