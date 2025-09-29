let nums = [1, 2, 3, 4];

let result = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0); // starting from 0 like 0+1, then 1+2, so on

console.log(result);
