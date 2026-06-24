function titleCase(str){
    let result = "";
    let splitted = str.split(" ");
    let capitalized, remaining;

    for(const word of splitted){
        capitalized = word[0].toUpperCase();
        remaining = word.substring(1).toLowerCase();
        result += capitalized + remaining + " ";
    }

    return result.trim();
}

console.log(titleCase("I like to code"));
console.log(titleCase("javaScript is fun"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
