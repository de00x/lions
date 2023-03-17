const fiveTask = (a, b) => {
  return function (x) {
    return x >= a && x <= b;
  };
};

let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.filter(fiveTask(3, 6)));
