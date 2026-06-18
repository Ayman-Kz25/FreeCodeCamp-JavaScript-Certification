function findLongestWordLength(str) {
  const words = str.split(" ");
  let maxLength = 0;
  for(let i=0; i<words.length; i++){
    // console.log(`${words[i]}: ${words[i].length}`);
    
    if(words[i].length > maxLength){
        maxLength = words[i].length;
    }
  }
  return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWordLength("May the force be with you"));

console.log(findLongestWordLength("Google do a barrel roll"));

console.log(findLongestWordLength("Googling do a barrel roll"));

console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));