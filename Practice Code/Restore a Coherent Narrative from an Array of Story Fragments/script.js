const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: "\"Do you ever get anywhere?\" he asked with a mocking laugh." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

// 1. Remove undefined/empty slots
function compactFragments(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      result.push(arr[i]);
    }
  }

  if (result.length !== arr.length) {
    console.log("[COMPACTED] Removed undefined fragments.");
  }

  return result;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

// 2. Stable sort (Insertion Sort)
function sortFragments(arr) {
  const result = [];

  // Copy array
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }

  // Insertion Sort
  for (let i = 1; i < result.length; i++) {
    const current = result[i];
    let j = i - 1;

    while (j >= 0 && result[j].id > current.id) {
      result[j + 1] = result[j];
      j--;
    }

    result[j + 1] = current;
  }

  return result;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

// 3. Remove duplicate ids
function dedupeFragments(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      result.length === 0 ||
      result[result.length - 1].id !== arr[i].id
    ) {
      result.push(arr[i]);
    } else {
      console.log("[DEDUPED] Removed duplicate id:", arr[i].id);
    }
  }

  return result;
}

const dedupedFragments = dedupeFragments(sortedFragments);

// 4. Fill missing ids
function fillMissingFragments(arr) {
  const result = [];

  if (arr.length === 0) return result;

  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i]);

    let current = arr[i].id;
    let next = arr[i + 1].id;

    while (current + 1 < next) {
      current++;

      console.log("[FILLED] Added placeholder for id:", current);

      result.push({
        id: current,
        text: "[...]"
      });
    }
  }

  result.push(arr[arr.length - 1]);

  return result;
}

const filledFragments = fillMissingFragments(dedupedFragments);

// 5. Assemble story
function assembleStory(arr) {
  let story = "";

  for (let i = 0; i < arr.length; i++) {
    story += arr[i].text;

    if (i !== arr.length - 1) {
      story += "\n";
    }
  }

  return story;
}

console.log(assembleStory(filledFragments));