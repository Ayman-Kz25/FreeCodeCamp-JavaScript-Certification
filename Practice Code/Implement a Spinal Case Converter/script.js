function spinalCase(str){
    let result = str;
    result = result.replaceAll(/ /g, "-");
    result = result.replaceAll(/_/g, "-");
    result = result.replace(/([a-z])([A-Z])/g, "$1-$2");
    return result.toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));