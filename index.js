// Your code goes here
// Add a DOMContentLoaded event listener to detect when HTML has loaded
// Use the event's callback function to identify paragraph element id="text"
// Replace id="text" with "This is really cool!"

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("text").innerHTML = "This is really cool!";
    // console.log("This is really cool!")
});
console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );