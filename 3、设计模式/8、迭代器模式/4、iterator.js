let gen = function* () {
  yield 1;
  yield* [2, 3];
  yield 4;
};

let it = gen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
