// Propagación

const obj =
{
  name: 'Marco',
  age: 27,
  country: 'AR',
}

let { name, ...all} = obj;

console.log( `Tu nombre es: ${name}`, all);

const obj =
{
  name: 'Marco',
  age: 27,
  country: 'AR',
}

let { country, ...all} = obj;

console.log(all);

