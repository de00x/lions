const makeArmy = () => {
  let array = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      console.log(j);
    };
    array.push(shooter);
    i++;
  }

  return array;
};

let army = makeArmy();

army[0]();
army[5]();
