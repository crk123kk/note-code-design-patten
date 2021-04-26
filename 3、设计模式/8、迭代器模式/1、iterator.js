function createIterator(array) {
  let index = 0;
  return {
    next() {
      return index < array.length
        ? { value: array[index++] }
        : { value: undefined, done: true };
    },
  };
}

let array = [1, 2, 3];
let it = createIterator(array);
console.log(it.next()); //{value:1, done: false}
console.log(it.next()); //{value:2, done: false}
console.log(it.next()); //{value:3, done: false}
//{value:undefined, done: true}
