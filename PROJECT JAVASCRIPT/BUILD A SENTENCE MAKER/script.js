/*
    create two different stories using a sentence template. 
    You will use variables to store different parts of the story
    and then output the stories to the console.
*/

/* Declare variable using let and assign value
    - adjective
    - noun
    - verb
    - place
    - adjective2
    - noun2
*/

let adjective = "happy";
let noun = "dog";
let verb = "run";
let place = "park";
let adjective2 = "bright";
let noun2 = "ball";

// declare fistStory and assign value
let firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

//console the firstStory with message "First story = [firstStory]"
console.log("First story: " + firstStory);

//insert and display it (i just know how to do this, and also need defer to display the text)
document.getElementById("output1").innerText = "First story: " + firstStory;

//assign new value to adjective, noun, verb, place, adjective2, noun2
adjective = "brave";
noun = "knight";
verb = "sneeze";
place = "castle";
adjective2 = "wide";
noun2 = "skewer";

//declare secondStory with same template
let secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

//console the second story with message "Second story: [secondStory]"
console.log("Second story: " + secondStory);

//insert and display it
document.getElementById("output2").innerText = "Second story: " + secondStory;