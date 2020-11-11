// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.

const mapFromScratch = function (callback) {
  const mappedArray = []

  for (let i = 0; i < this.length; i++) {
    mappedArray[i] = callback(this[i], i)
  }

  return mappedArray
}

Array.prototype.myMap = mapFromScratch

someMappedArray = [2, 10, 20, 1, 4, 5]
console.log('Map from scratch:', someMappedArray.myMap((x) => x * x))





// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.

const reduceFromScratch = function (callback, sumOfArray) {
  for (let i = 0; i < this.length; i++) {
    sumOfArray = callback(sumOfArray, this[i])
  }

  return sumOfArray
}

Array.prototype.myReduce = reduceFromScratch

someReducedArray = [2, 10, 20, 1, 4, 5]
console.log('Reduce from scratch:', someReducedArray.myReduce((x, sumOfArray) => x + sumOfArray, 0))




// .filter() - function that takes an array of items and a function that returns an array with only the items that return true
// in the function.

const filterFromScratch = function (callback) {
  const filteredArray = []

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      filteredArray.push(this[i])
    }
  }

  return filteredArray
}

Array.prototype.myFilter = filterFromScratch

someFilteredArray = [2, 10, 20, 1, 4, 5]
console.log('Filter from scratch:', someFilteredArray.myFilter((x) => x > 3))
