const data =
{
  frontend: 'Marco',
  backend: 'Isabel',
  desing: 'Ara',
};
const entries = Object.entries(data);
console.log(entries);

const data =
{
  frontend: 'Marco',
  backend: 'Isabel',
  desing: 'Ara',
};

const values = Object.values(data);

const string = 'hello';
console.log(string.padStart(8, 'Hi '));
console.log(string.padEnd(9, ' Bye'));


const iceCreamShop = () =>
{
  return new Promise((resolve, reject) =>
  {
    (true)
    ? setTimeout(() => 
      {
        resolve('Here is your iceCream');
      }, 8000)
    : reject(new Error('Text Error'))
  })
}



const buyIceCream = async money =>
{
  try
  {
    if(money>= 500)
    {
      console.log('Great! Im going to make your Ice Cream, wait 8 seconds please.')
      const responseOK = await iceCreamShop();
      console.log(responseOK);
    }
    else
    {
      const responseFAIL = 'Sorry, you dont have enought money'
      console.log(responseFAIL);
    }
  }
  catch (error)
  {
    console.error(error);
  }
}

buyIceCream(400);
buyIceCream(600);