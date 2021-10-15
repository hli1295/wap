const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// #1

readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    readline.question('What is your age? ', age => {
        if(age < 16){
            console.log("You are not allowed to drive in Iowa.");
        }else{
            console.log("You are allowed to get a driving license in Iowa.");
        }
        readline.close();
    });
});