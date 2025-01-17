const inventory = [
    { name: 'Apple', price: 2, quantity: 30 },
    { name: 'Banana', price: 1, quantity: 50 },
    { name: 'Orange', price: 3, quantity: 20 },
    { name: 'Mango', price: 4, quantity: 15 }
];

//dobule price 

const doublePrice = () => {
    for (let i = 0; i < inventory.length; i++) {
        inventory[i].price *= 2
    }
    return inventory
}

//console.log(doublePrice())

//Reduce quantity of each item by 5: 
// Use a while loop to reduce the quantity of 
// each item by 5 as long as the item's quantity is greater than 5.


const reduceQty = () => {
    let i = 0;
    while (i < inventory.length) {
        if (inventory[i].quantity > 5) {
            inventory[i].quantity -= 5
        } i++;
    } return inventory
}


//console.log(reduceQty());

//Find items under a specific price: Use a for...of loop 
// to create a new array of items with a price less than 5.

const specificPrice = (inputPrice = 5) => {
    let result = []
    for (const item of inventory) {
        if (item.price < inputPrice) {
            result.push(item)
        }
    } return result

}

//console.log(specificPrice())

//Count total items in inventory: 
// Use a for...in loop to iterate over 
// the properties of each object and calculate 
// the total quantity across all items.

const calToTalQty = () => {
    var total = 0
    for (const index in inventory) {
        total += inventory[index].quantity
    }
    return total
}

//console.log(calToTalQty())

//Recreate inventory: Use a traditional for loop 
// to create a new array of inventory items where 
// each item's name is suffixed with " (New)" and 
// the price is multiplied by 1.1 (a 10% markup).

const recreateInvt = () => {
    let newInventory = []

    for (let i = 0; i < inventory.length; i++) {
        let item = inventory[i]

        const updateItem = {
            name: `${item.name} (New)`,
            price: parseFloat((item.price * 1.1).toFixed(2)),
            quantity: item.quantity
        }

        newInventory.push(updateItem)
    }
    return newInventory
}

console.log(recreateInvt())