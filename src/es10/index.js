// .flat

let array = [1,2,3, [1,2,3, [1,2,3]]];
const flatArray = array.flat();
console.log(flatArray);
const flatArray2 = array.flat(2);
console.log(flatArray2);

// flatmap

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value * 2]));

// trim start and end

let hello = '              hello world        ';
console.log(hello.trimStart());
console.log(hello.trimEnd());

console.log(hello.trim());

// Object.entries

let entries = [['name', 'oscar'], ['age', 27]];
console.log(Object.fromEntries(entries));