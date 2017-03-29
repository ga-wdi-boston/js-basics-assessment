'use strict'

const ask = require('../lib/ask.js')

let answer = 7
while (answer !== 7) {
  answer = ask("Guess my number? ")
  if (answer <= 1 && answer >= 10) {
   console.log("The guess needs to be between 1 and 10")
   break
  }
}


  //Change the code from this question so that it tests for a number of your choice
  //between 1 and 10 instead of the string `'SeCrEt'`.  If `answer` isn't >= 1 and
  //<= 10, use `console.log` to display a message saying that the guess needs to
  //be between 1 and 10.  Save your code in the file called `bin/diagnostic.js`.
  //You can test the code with `node bin/diagnostic.js` in your Terminal.
