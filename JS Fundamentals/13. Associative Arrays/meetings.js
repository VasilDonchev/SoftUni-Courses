function meetings(input){
    //create collection
    let result = {};

    // for every entry of input
    for( let line of input) {
        // - - parse
        let [day, name] = line.split(' ')

        // - - store only if is available 

        if (result.hasOwnProperty(day)) {
            console.log();
        }
    }
}
meetings(
['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']);
 console.log('- - - - - - - -');
 meetings(
['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);
