const inventory = [];

function findProductIndex(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  const name = product.name.toLowerCase();
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({
      name: name,
      quantity: product.quantity,
    });
    console.log(`${name} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  name = name.toLowerCase();

  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  const item = inventory[index];

  if (item.quantity < quantity) {
    console.log(
      `Not enough ${name} available, remaining pieces: ${item.quantity}`
    );
    return;
  }

  item.quantity -= quantity;

  if (item.quantity === 0) {
    inventory.splice(index, 1);
  }

  console.log(`Remaining ${name} pieces: ${item.quantity}`);
}

// Tests
addProduct({ name: "FLOUR", quantity: 5 });
addProduct({ name: "lemon", quantity: 5 });

removeProduct("FLOUR", 5);
removeProduct("RICE", 10);
removeProduct("MANGO", 3);

console.log(inventory);