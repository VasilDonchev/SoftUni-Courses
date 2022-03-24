function cats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
      
    }
  }
  let cats = [];
  for (let currentStr of arr) {
      let currentData = currentStr.split(' ');
      let currentCat = new Cat(currentData[0], currentData[1]);
      cats.push(currentCat);
       
  }
  cats.forEach( cat => cat.meow());
}
cats(["Mellow 2", "Tom 5"]);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);

//  "{cat name}, age {age} says Meow"
