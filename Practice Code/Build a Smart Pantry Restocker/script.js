const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  let result = [];
  for (let i = 0; i < rawData.length; i++) {
    let parts = rawData[i].split("|");
    let obj = {
      sku: parts[0],
      name: parts[1],
      qty: Number(parts[2]),
      expires: parts[3],
      zone: parts[4] ? parts[4] : "general",
    };
    let exists = false;
    for (const item of result) {
      if (item.sku === obj.sku) {
        exists = true;
      }
    }
    if (!exists) {
      result.push(obj);
    }
  }

  return result;
}

function planRestock(pantry, shipment) {
  let actions = [];
  let action = {};

  for (const item of shipment) {
    if (item.qty <= 0) {
      action.type = "discard";
    } else if (item.qty > 0) {
        if(item.sku === pantry.sku){
            action.type = "restock";
        }
    } else {
      action.type = "donate";
    }
    action = {
      type: "",
      item: item,
    };
    actions.push(action);
  }

  return actions;
}

// console.log(parseShipment(rawData));
console.log(planRestock(pantry, parseShipment(rawData)));
