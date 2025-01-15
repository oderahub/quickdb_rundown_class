
function checkValidNum(num) {
    const number = Number(num)

    if (number >= 10 && number <= 20) {
        console.log("Valid")
    } else {
        console.log("Invalid")
    }
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (num) => {
    checkValidNum(num);
    readline.close();
});