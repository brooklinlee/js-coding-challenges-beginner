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

/* Find the Number

You are given an array of integers arr and an integer k. Write a function findNumber that determines whether k is present in the array. 

- HackerRank

*/

function findNumber(arr, k) {
  for (let i=0; i< arr.length; i++) {
      if (arr[i] === k) {
          return 'YES'
      } else {
          return 'NO'
      }
  }
}

/* Generate Odd Numbers

You are given two integers, l and r (1 <= l <= r <= 100). Write a function oddNumbers that prints all odd integers in the inclusive range from l to r.

- HackerRank

*/


findNumber([3, 5, 2], 1)

function oddNumbers(l, r) {
  for (let i = l; i <= r; i++) {
      if (i % 2 !== 0) {
          console.log(i)
      }
  }
}

// oddNumbers (3, 8)


/* diagonalDifference

Given a square matrix, calculate the absolute difference between the sums of its diagonals. 

- HackerRank

*/

function diagonalDifference(arr) {
  let primarySum = 0
  let secondarySum = 0

  let sqrRoot = Math.sqrt(arr.length)

  for (let i = 0; i < arr.length; i += (sqrRoot + 1)) {
    primarySum += arr[i]
}
for (let i = (sqrRoot - 1); i < (arr.length - 1); i += (sqrRoot - 1)) {
  secondarySum += arr[i]
}

console.log(Math.abs(primarySum - secondarySum))
return Math.abs(primarySum - secondarySum)
}

// diagonalDifference([1, 2, 3, 4, 5, 6, 9, 8, 9])

/* The HackerRank problem actually has a different arr input than just a matrix array. The first num in the array is the sqrRoot that I calcuated above, ergo I don't need to find that and rather need to splice it. I misunderstood the input format when solving previously */

function diagonalDifferenceTwo(arr) {
  let primarySum = 0
  let secondarySum = 0

  let sqrRoot = arr[0]
  let newArr = arr.slice(1)

  for (let i = 0; i < newArr.length; i += sqrRoot + 1) {
    primarySum += newArr[i]
  }

  for (let i = sqrRoot - 1; i < newArr.length - 1; i += sqrRoot - 1) {
    secondarySum += newArr[i]
  }

  return Math.abs(primarySum - secondarySum)
}


// console.log(diagonalDifferenceTwo([3, 11, 2, 4, 4, 5, 6, 10, 8, -12]))

/* What Javascript statement in place of "?" will make the result always be between 6 and 7? const x = 2; let y = 4; function update(arg) { return Math.random() + y * arg; } y = 2; ?; const result = update(x); * */

const x = 2;
let y = 4;

function update(arg) {
  return Math.random() + y * arg;
}

y = 2;

// ?; // The statement to be replaced

const result = update(x);

/* Solve Meal Cost

Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.

HackerRank
*/

function solve(meal_cost, tip_percent, tax_percent) {
  let total = 0
  total += (tip_percent/100 * meal_cost)
  total += (tax_percent/100 * meal_cost)
  total += meal_cost
  console.log(Math.round(total))
  return Math.round(total)
}

// solve(12.00, 20, 8)

/* readLine


Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal. 

HackerRank
*/

function plusMinus(arr) {
  let posTotal = 0
  let negTotal = 0
  let zeroTotal = 0
  arr.forEach(num => {
    if (num === 0) {
      zeroTotal += 1 
    } else if (num < 0) {
      negTotal += 1
    } else {
      posTotal += 1
    }
  })
  let percentages = [posTotal , negTotal, zeroTotal].map(total => total / arr.length)
  percentages.forEach(percent => {
      console.log(percent.toFixed(6))
  }) 
}


console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
