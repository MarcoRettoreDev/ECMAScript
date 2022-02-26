function newFunction (name, age, country)
{
  var name = name || 'Marco Antonio';
  var age = age || 27;
  var country = country || 'AR';
  console.log(name, age, country);
}

newFunction();

// es6

function newFunction2(name = 'Marco Antonio', age= 27, country='AR')
{
  console.log(name, age, country);
}

newFunction2();


// Template lieterals

const hello = "Hello";
const world = 'World';
let phrase = hello + ' ' + world;
console.log(phrase);

let anotherPhrase = `${hello} ${world}`;
console.log(anotherPhrase);


// multi line string

let lorem = 'Lorem ipsum dolor sit amet consec veniam perspiciatis in odit laudantium esse molestias.\n' + 'Aca estoy saltando de linea';

console.log(lorem);

let lorem2 = `another epic phrase that we need, 
this is another line
an there is another :)
`;

console.log(lorem2);

// Destructuring

let person = 
{
  'name': 'Marco',
  'age': 32,
  'country': 'AR'
}

console.log(person.name, person.age, person.country);

let { name, age, country } = person;

console.log(name , age, country);

// Spread operator

let team1 = ['Marco', 'Gabriel', 'Fernando'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ... team1, ...team2];

console.log(education);


// Let and const

{
  var global = 'Variable global';
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(global);


// Objects props

//es5
let name = 'Marco';
let age = 27;

obj = { name: name, age: age};

//es6

obj2 = { name, age};

console.log(obj2);

// Arrow functions "funciones anónimas"

const names = 
[
  { name: "Marco", age:27},
  { name: 'Gabriel', age: 32}
]

let listOfNames = names.map(function (item)
{
  console.log(item.name);
});

let listOfNames2 = names.map(item => 
  {
    console.log(item.name)
  });

const listOfnames3 = (name, age ,country) => 
{
  console.log(name, age, country);
};

const listOfNames4 = name =>
{
  console.log(name, age, country);
};

const square = num => num * num;

console.log(square(2));

// Promises

const helloPromise = () => // funcion que guarda nuestra promesa
{
  return new Promise((resolve, reject) => // creamos nuestra promesa con los casos resolve y reject
  {
    if(true) // Si se resuelve, ok
    {
      resolve('Its ok');
    }
    else // sino, notok
    {
      reject('Not ok');
    }
  })
};

helloPromise() // llamamos a nuestra promesa
  .then(response => console.log(response)) // ejecutamos algo con nuestra data (podemos anidar varios then)
  .catch(reject => console.log(reject)); // hacemos algo con el error

// Clases

class calculator 
{
  constructor()
  {
    this.valueA = 0;
    this.valueB = 0;
  }
  sumar(a ,b)
  {
    this.valueA = a;
    this.valueB = b;
    return a + b;
  }
};

const operacion = new calculator();

console.log(operacion.sumar(2,2));

// Modules

import { hello } from './module.mjs';

hello(); // This is not going to work cause index.js itsn't a module.

// Generators

function* helloWorld() // creamos una funcion de esta forma con el *
{
  if(true)
  {
    yield 'hello, '; // yield es como un return del bloque if, que llamamos con .next()
  }
  if(true)
  {
    yield 'World'; // podemos concatenar varios yield de forma simultanea
  }
};

const generatorHello = helloWorld(); // guardamos nuestra funcion en una constante

console.log(generatorHello.next().value); // utilizamos .next() para llamar a nuestro yield y 
console.log(generatorHello.next().value); // el .value para obtener el valor del mismo
