function login(input) {
    let username = input.shift();
    // let password = username.split('').reverse().join('');
 
    // let fails = 0;
    // let currentPassword = input.shift();
    // while (currentPassword !== password && fails < 3) {
    //     fails++;
    //     console.log(`Incorrect password. Try again.`);
    //     currentPassword = input.shift();
    // }
 
    // if (currentPassword === password) {
    //     console.log(`User ${username} logged in.`);
    // } else {
    //     console.log(`User ${username} blocked!`);
    // }
    let password = "";
    for ( let i = username.length -1; i >= 0; i--) {
        password += username[i]
    }
    counter = 0;
    let command = input.shift();
    while (password !== command && counter < 3) {
        counter++;
        console.log(`Incorrect password. Try again.`);
        command = input.shift();
    }
    if ( password == command) {
        console.log(`User ${username} logged in.`);
    } else {
        console.log(`User ${username} blocked!`);
    }
}
login(['Acer','login','go','let me in','recA']);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
