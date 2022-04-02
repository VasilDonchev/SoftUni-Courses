function solve(input) {
  let newStr = "";
  for (let i = 0; i < input.length; i++) {
      let currChar = input.charAt(i)
      let nextChar = input.charAt(i + 1)
    if (currChar !== nextChar) {
      newStr += input.charAt(i);
    }
  }
  console.log(newStr);
}
solve("aaaaabbbbbcdddeeeedssaa");
