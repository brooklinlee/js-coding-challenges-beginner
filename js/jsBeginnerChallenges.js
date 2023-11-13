/* Challenge from https://gist.github.com/DavidStinson/ba8aba26f925f8dd9a63e7c7a8cf9384

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

console.log(duplicate(['🍕', '🥗', '🍷', '🍰']))

console.log('hello')


/*------------------------------------------

Running the repl should result in the 
following output:

['🍕', '🥗', '🍷', '🍰', '🍕', '🥗', '🍷', '🍰']

------------------------------------------*/

