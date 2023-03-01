// Оба цикла выведут alert с одинаковыми значениями или нет?
for (let i = 0; i < 5; i++) console.log(i);
for (let i = 0; i < 5; ++i) console.log(i);
// от 0 до 4 в обоих случаях, так работает for.
