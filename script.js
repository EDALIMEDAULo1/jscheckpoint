// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.

let str = "i love candy";


let revStr = (str) =>{
  let rev = "";
  for(i = str.length-1; i >= 0; i--){
    rev+= str[i];
  } console.log(rev);
}
revStr(str);

// Count Characters: Create a function that counts the number of characters in a string.
let char = "yes and no";
// let res = "";

let counter = (char) =>{
  let res = 0;
  for(let i = 0; i < char.length; i++){
    if(char[i] !== ' '){
      res++
    }
  }
  console.log(res);
}

counter(char);

// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
let words = "i am very hungry";

let capital = (words) =>{
  let cap = words.split(' ');
  for(let i = 0; i < cap.length; i++){
    cap[i] = cap[i][0].toUpperCase() + cap[i].slice(1);
  }
 return cap.join(' ');
}
console.log(capital(words));


// Array Functions:

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
let num = [1,2,3,4,6,5];

let minimumMaximum = (num) =>{
  let min = Math.min(...num);
  let max = Math.max(...num);
  return `min: ${min}, max: ${max}`;
}
console.log(minimumMaximum(num));

// Sum of Array: Create a function that calculates the sum of all elements in an array.
let nums = [1,4,5,7,8,3];

let arrSum = (nums) =>{
  let sumRes = 0;
  for(let i = 0; i < nums.length; i++){
    sumRes+= nums[i];
  }
  return sumRes;
}
console.log(arrSum(nums));

// Filter Array: Implement a function that filters out elements from an array based on a given condition.
let numbs = [1,2,3,4,5,6,7,8];

let odd = (numbs) =>{
  let oddVal = [];
  for(let i = 0; i < numbs.length; i++){
    if(numbs[i] % 2 !==  0){
      oddVal.push(numbs[i]);
    }
  }
  return oddVal;
}
console.log(odd(numbs));

// Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.
let a = 7;

let fact = (a) =>{
  let res = 1;
  for (let i = 1; i <= a; i++){
    res *= i;
  }
  return res;
}
console.log(fact(a));

// Prime Number Check: Create a function to check if a number is prime or not.
let primeNums = [1,2,3,4,5,6,7,8,9];

let prime = (arr) => {
  let primes = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let isPrime = true;

    if (currentNum < 2) {
      isPrime = false;
    } else {
      for (let j = 2; j < currentNum; j++) {
        if (currentNum % j === 0) {
          isPrime = false; 
          break; 
        }
      }
    }

    if (isPrime) {
      primes.push(currentNum);
    }
  }
  
  return primes;
}

console.log(prime(primeNums));

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )


const fibonacciGenerator = (terms) => {
  let seq = [0, 1];

  if (terms === 1) return [0];
  if (terms <= 0) return [];

  for (let i = 2; i < terms; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }

  return seq;
}

console.log(fibonacciGenerator(8));
