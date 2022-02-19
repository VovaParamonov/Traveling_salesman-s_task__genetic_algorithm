import { alg } from'./GeneticAlgorithm';

const factorial = (num: number)  => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  console.log(`Factorial(${num}) = ${result}`);
  return result;
}

// Func - function with cb last arg
const countTime = (func: (...data: any[]) => void, countName: string, ...args: any[]) => {
  console.time(countName);

  func(...args, () => console.timeEnd(countName));
}

const findRoute = (length: number, cb: (...data: any[]) => any) => {
  let bestRoute = 0;

  for (let i = 0; i < length; i++) {
    let newRoutValue;
    if ((newRoutValue = Math.floor(Math.random() * 1000)) > bestRoute) {
      bestRoute = newRoutValue
    }

    if (i % 100000000 === 0) {
      console.log(i);
    }
  }
  console.log("Best route: ", bestRoute);
  if (cb) {
    cb();
  }
}

countTime(findRoute, 'Test', 1); // Warming up start

// countTime(findRoute, 'findRoute with factorial(5)', factorial(5));
// countTime(findRoute, 'findRoute with factorial(10)', factorial(10));
// countTime(findRoute, 'findRoute with factorial(15)', factorial(13));

alg();