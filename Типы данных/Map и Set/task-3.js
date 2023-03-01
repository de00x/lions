// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

// Но это не выходит:

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// keys.push("more");

// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?

// Потому что map.keys() возвращает итерируемый объект, а не массив.

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys);
