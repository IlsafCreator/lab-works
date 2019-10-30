function check(data, expectedType) {
  // if (expectedType === 'array' && !Array(data).isArray) {
  //   return false; // or throw new Error('ValidationError')
  // }
  console.log("Данные на входе: ", data);
  console.log("Тип входных данных", typeof data);
  console.log("Ожидаемый тип", expectedType);
  if (typeof (data) === expectedType) {
    console.log(true);
  } else if (expectedType === 'null' && data === null) {
    console.log(true, '(null===null)');
  } else {
    console.log(true);
  }


}

// console.log(check([], 'number')); // false or throw ValidationError
// console.log(check([], 'array')); // false or throw ValidationError
console.log(check([1, 2, 3], 'array'));
console.log(check([1, 2, 3], 'object'));
// console.log(check(123, 'number'));
console.log(check(null, 'null')); // true
// console.log(check('test', 'string')); // true