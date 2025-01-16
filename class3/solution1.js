
const inventory = [
    { name: 'Apple', price: 2, quantity: 30 },
    { name: 'Banana', price: 1, quantity: 50 },
    { name: 'Orange', price: 3, quantity: 20 }
];

//Add a new item:
const addItem = (input) => {
    inventory.push(input)
}

addItem({ name: 'Mango', price: 4, quantity: 15 })



//Remove an item
const removeItem = (index) => {
    if (index !== -1) {
        inventory.splice(index, 1)
    }
}

removeItem(1)
console.log(inventory)

//Update quantity:

const updateInventory = (itemName, quantitySold) => {
    const item = inventory.find((product) => product.name === itemName)

    if (item) {
        if (item.quantity >= quantitySold) {
            item.quantity -= quantitySold
            console.log(`${quantitySold} ${itemName}(s) sold. Updated inventory:`);
        } else {
            console.log(`Not enough ${itemName} in stock to sell ${quantitySold}. Only ${item.quantity} available.`);
        }
    } else {
        console.log(`${itemName} not found in inventory.`);
    }

}
updateInventory("Orange", 10)

console.log(inventory)


//Find an item

const findItem = (itemName) => {
    return inventory.find((product) => product.name === itemName)
}

console.log(findItem('Apple'))

//Filter expensive items:

const filterExpensiveItems = (prices) => {
    if (typeof prices !== 'number') {
        throw new Error('Invalid price threshold. Must be a number.');
    }
    return inventory.filter((item) => item.price >= prices)
}

console.log(filterExpensiveItems(2))

//Calculate total value

const calTotalValue = () => {
    return inventory.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)
}

console.log(calTotalValue())