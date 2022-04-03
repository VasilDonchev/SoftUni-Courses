function illusion(text, index, letter){
    if (index <= text.length -1) {
     let firstHalf = text.substring(0,index);
     let secondHalf = text.substring(index+1);
     code = firstHalf + letter + secondHalf;
     console.log(code);
     console.log('Done!');
     return code;
    } else {
        console.log("The spell was too weak.");
    }
}
illusion("swordmaster", 12, "z")
function ivination(text, replacement, pattern){
    let result= "";
   
    if (text.includes(replacement)) {

        result = text.replaceAll(replacement, pattern)
    }
    console.log(result);
    return result;
}
//illusion("text",4,"x")
//ivination("Is Java the bst Java of Java","Java", 'JavaScript')
function alteration(text,substr) {
    let result = "";
    if (text.includes(substr)) {
      result = text.split(substr).join("");
      console.log(result);
      return result;
    }
  }
  alteration("swordmaster", "master")