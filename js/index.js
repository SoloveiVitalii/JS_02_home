

 
// const num = parseInt(prompt('Enter your variable number'));

var n = 100; 
var fibonacci = [0, 1]; 

for (i = 2; i < n; i ++) {
 
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

const result = fibonacci.slice(0,n);
alert (result);

// Fn = Fn-1 + Fn-2- formula Fibonacci




function fib(n) {
  let a = 1,
      b = 1;
  for (let i = 3; i <= n; i++) {
   let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));