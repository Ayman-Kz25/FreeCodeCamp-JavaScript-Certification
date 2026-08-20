function initQueue() {
  return {
    collection: [],
  };
}

function print(queue) {
  console.log(queue.collection);
}

function enqueue(queue, element) {
  return queue.collection.push(element);
}

function dequeue(queue) {
    return queue.collection.shift();
}

function front(queue) {
    return queue.collection[0];
}

function size(queue) {
    return queue.collection.length;
}

function isEmpty(queue) {
    return queue.collection.length === 0;
}

const queue = initQueue();

enqueue(queue, "A");
enqueue(queue, "B");
enqueue(queue, "C");

console.log(front(queue)); // "A"
console.log(size(queue));  // 3

console.log(dequeue(queue)); // "A"
console.log(dequeue(queue)); // "B"

console.log(front(queue)); // "C"
console.log(size(queue));  // 1

console.log(isEmpty(queue)); // false

console.log(dequeue(queue)); // "C"

console.log(isEmpty(queue)); // true
console.log(dequeue(queue)); // undefined