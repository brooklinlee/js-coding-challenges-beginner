/* Challenges from https://gist.github.com/DavidStinson/ba8aba26f925f8dd9a63e7c7a8cf9384

Code a function named duplicate thataccepts an array as its only argument andreturns a new array that contains the original elements followed by duplicatesof those elements.

For example:

duplicate(['🍔', '🍟', '🍺'])

would return -->
['🍔', '🍟', '🍺', '🍔', '🍟', '🍺']

2) Return a new array, do not modify the array passed to the function.

------------------------------------------*/

// Write the function here....

function duplicate(arr) {
  let newArr = []
  for (i = 0; i < arr.length; i ++) {
    newArr.push(arr[i])
  }
  return newArr.concat(newArr)
}

// console.log(duplicate(['🍕', '🥗', '🍷', '🍰']))

/*------------------------------------------
Running the repl should result in the 
following output:

['🍕', '🥗', '🍷', '🍰', '🍕', '🥗', '🍷', '🍰']

------------------------------------------*/

/* Challenge from  https://gist.github.com/DavidStinson/ba8aba26f925f8dd9a63e7c7a8cf9384*/

/*
1) Code a function named charCount that accepts a string as its only argument and returns an object with the count of each character in the string.
2) The returned object should have properties where the keys are a character in the string and the value is how many times the character appears in the string argument.
3) Upper and lower case characters should be counted separately.
4) Space characters should be counted too.

For example:

	charCount("Hello there")

	would return an object like this -->
		{ H: 1, e: 3, l: 2, o: 1, ' ': 1, t: 1, h: 1, r: 1 }

------------------------------------------*/

// Write the function here....

function charCount(str) {
  let obj = {}
  let splitStr = str.split('') // <= split string, returns an array
  splitStr.forEach(char => {
    if (!obj[char]) {
      obj[char] = 1
    } else {
      obj[char] += 1
    }
  })
  return obj
}

// console.log(charCount("Let's Gooooooo!!"))

/*------------------------------------------

Running the repl should result in the 
following output:

{ L: 1, e: 1, t: 1, "'": 1, s: 1, G: 1, o: 7, "!": 2 }

------------------------------------------*/

// * Complete the 'fizzBuzz' function below.
// *
// * The function accepts INTEGER n as parameter.
// */

// INPUT: one number
// OUTPUT: If i is a multiple of 3 & 5: FizzBuzz
// If i is a multiple of 3 (but not 5): Fizz
// If i is a multiple of 5 (but. not 3): Buzz
// If i is not a multiple of 3 or 5: i

// notes: printing 1 through n, iterating with a for each loop
// (i=1; i < n; i++)
// if i % 3 && i % 5 then print FizzBuzz, cont.
// if i % 3 then print Fizz
// if i % 5 then print Buzz
// else print i


function fizzBuzz(n) {
   // Write your code here
  let i = 0
  for (i = 1; i <= n; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz')
    } else if ((i % 3 == 0)) {
        console.log('Fizz')
    } else if ((i % 5 == 0)) {
        console.log('Buzz')
    } else (
      console.log(i)
    ) 
  }
}

