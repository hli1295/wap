const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let sum = 0;
function getNumber(){

    readline.question("Insert a number (type stop to quit) ", num => {
        if(num == "stop"){
            console.log("Sum = " + sum);
            readline.close();
            return null;
        }

        sum += parseInt(num);

        return getNumber();
    })
}

getNumber();