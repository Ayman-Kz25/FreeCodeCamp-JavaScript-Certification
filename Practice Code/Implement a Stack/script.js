function initStack() {
  return {
    collection: [],
  };
}

function push(stack, element){
    stack.collection.push(element)
}

function pop(stack, element){
    return stack.collection.pop();
}

function peek(stack){
    return stack.collection[stack.collection.length - 1];
}

function isEmpty(stack){
    return stack.collection.length === 0;
}

function clear(stack){
    return stack.collection.length = 0;
}

const stack = initStack();

push(stack, 10);
push(stack, 20);
push(stack, 30);

console.log(peek(stack));    // 30
console.log(pop(stack));     // 30
console.log(peek(stack));    // 20
console.log(isEmpty(stack)); // false

clear(stack);

console.log(isEmpty(stack)); // true
console.log(pop(stack));     // undefined