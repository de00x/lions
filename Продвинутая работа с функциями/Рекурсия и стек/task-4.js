let object = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const print = (object) => {
  alert(object.value);

  if (object.next) {
    print(object.next);
  }
};

print(object);
