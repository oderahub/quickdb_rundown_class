function calculateAreaRectangle(length, width) {
    let numLength = Number(length);
    let numWidth = Number(width);

    let area = numLength * numWidth;

    const threshold = 100;

    // Compare the area with the threshold
    if (area > threshold) {
        console.log(`${length}cm by ${width}cm = ${area}(cm^2), which is greater than ${threshold}(cm^2)`);
    } else if (area === threshold) {
        console.log(`${length}cm by ${width}cm = ${area}(cm^2), which is equal to ${threshold}(cm^2)`);
    } else {
        console.log(`${length}cm by ${width}cm = ${area}(cm^2), which is less than ${threshold}(cm^2)`);
    }
}

// Prompt user for input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the length of the rectangle in cm: ', (length) => {
    readline.question('Enter the width of the rectangle in cm: ', (width) => {
        calculateAreaRectangle(length, width);
        readline.close();
    });
});