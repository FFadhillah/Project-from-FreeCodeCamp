// create variable for fccSentence
const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some example of the includes() method:");

// example 1 : using includes if true

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");

console.log(`fccSentence.includes("freeCodeCamp") return ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);