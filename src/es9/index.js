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

const data = 
{
  name: 'Marco',
  age: 27,
}

const data2 =
{
  ...data,
  country: 'AR',
}

console.log(data2);


// Sentencia Finally

const helloWorld = () =>
{
  return new Promise((resolve, reject) =>
  {
    true
    ? setTimeout(() =>resolve('Hola, está ok'), 3000)
    : reject(new Error('No está ok'))
  })
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizado'))


//Regex (manejo de fechas)

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-02-26');
const date = match[0]
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day, date);