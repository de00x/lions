Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

const f = () => {
  console.log("Hello!");
};

f.defer(1000);
