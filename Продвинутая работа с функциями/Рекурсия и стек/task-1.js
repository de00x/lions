// function sum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sum(100));

// function sum(n) {
//   if (n == 1) return 1;
//   return n + sum(n - 1);
// }

// console.log(sum(100));

function sum(n) {
  return (n * (n + 1)) / 2;
}

console.log(sum(100));
