function isPalindrome(word) {
  const lower = word.toLowerCase();
  const reversed = lower.split("").reverse().join("");
  return lower === reversed;
}

function findPalindromeBreaks(words) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      result.push(i);
    }
  }

  return result;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) return [];

  const map = {};

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (!map[phrase]) {
      map[phrase] = [];
    }

    map[phrase].push(i);
  }

  const result = [];

  for (const key in map) {
    if (map[key].length > 1) {
      result.push(...map[key]);
    }
  }

  return result.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) return [];

  const result = [];

  for (const words of texts) {
    result.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words),
    });
  }

  return result;
}