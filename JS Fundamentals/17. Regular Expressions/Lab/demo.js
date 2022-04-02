let pattern = /(?<a>[A-Z][a-z]+)/g;

let text = "It was Text Lorem Ipsum";

let match = pattern.exec(text);

while (match != null) {
    console.log(match);
    console.log(match[0]);
    console.log(match.groups.a);
    match = pattern.exec(text);
}