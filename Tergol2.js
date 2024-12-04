
//Task 2 :
const limit = 237;
let primes = [];
for (let num = 2; num <= limit; num++) 
  {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num) && isPrime; i++) 
      {
        if (num % i === 0) 
        {
            isPrime = false;
        }
    }
    
    if (isPrime)
    {
      primes.push(num);
  }
}
console.log(primes);
