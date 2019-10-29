function pulloutArray(array) {
  var resultArray = [];
  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === 'object') {
      for (var j = 0; j < array[index].length; j++) {
        resultArray.push(array[index][j]);
      }
    } else {
      resultArray.push(array[index]);
    }
  }
  console.log(resultArray);
}

pulloutArray([1, 2, 3]); // return [1, 2, 3]
pulloutArray([]); // return []
pulloutArray([1, [2, 3, 4], 5]); // return [1, 2, 3, 4, 5]
pulloutArray([1, [2, 3, 4], 5, [1]]); // return [1, 2, 3, 4, 5, 1]
// pulloutArray([1, [1], null, NaN]); // return [1, 1]
// pulloutArray([1, [1], null, NaN, ['test']]); // return [1, 1]



