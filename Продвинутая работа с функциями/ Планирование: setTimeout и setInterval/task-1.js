const printNumbers = (from, to) => {
  let current = from;

  const go = () => {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  };

  go();
  let timerId = setInterval(go, 1000);
};

printNumbers(5, 10);
