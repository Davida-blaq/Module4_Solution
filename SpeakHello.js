// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

(function () {
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    var speakWord = "Hello";
    console.log(speakWord + ", " + name + "!");
  };

  window.helloSpeaker = helloSpeaker;

  helloSpeaker.speak('John');

})();



// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =
// Create the helloSpeaker object
var helloSpeaker = {};

// Attach the speak method to helloSpeaker
helloSpeaker.speak = function(name) {
  console.log("Hello, " + name + "!");
};

// Expose helloSpeaker to the global context
window.helloSpeaker = helloSpeaker;  // Exposing in a browser-like environment

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";
// Create the helloSpeaker object
var helloSpeaker = {};

// Attach the speak method to helloSpeaker
helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name + "!");
};

// Expose helloSpeaker to the global context
window.helloSpeaker = helloSpeaker;  // Exposing in a browser-like environment

// Define the speakWord variable
var speakWord = "Hello";


// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// Create the helloSpeaker object
var helloSpeaker = {};

// Attach the speak method to helloSpeaker
helloSpeaker.speak = function(name) {
  var speakWord = "Hello";
  console.log(speakWord + ", " + name + "!");
};

// Expose helloSpeaker to the global context
window.helloSpeaker = helloSpeaker;  // Exposing in a browser-like environment

helloSpeaker.speak('John');

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.

window.helloSpeaker = helloSpeaker;  // Exposing in a browser-like environment

// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;