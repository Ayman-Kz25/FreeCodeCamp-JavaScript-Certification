function addTogether (num1, num2) {
    if(typeof num1 !== "number"){
        return undefined;
    }

    if(arguments.length === 2){
        if(typeof(num2) !== "number"){
            return undefined;
        }
        return num1 + num2;
    }

    return function(num2){
        if(typeof num2 !== "number"){
            return undefined;
        }

        return num1 + num2;
    };
}

// const sum2And = addTogether("2");
// console.log(sum2And("3"));

console.log(addTogether(2,3));
console.log(addTogether(23.4,30));
console.log(addTogether("2",3));
console.log(addTogether(5,undefined));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(5));
console.log(addTogether(5)(7));
console.log(addTogether(5)([3]));
console.log(addTogether(2, "3"));