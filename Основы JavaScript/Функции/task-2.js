// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Родители разрешили?");
//   }
// }

// Сделайте два варианта функции checkAge:

// 1 Используя оператор ?
// 2 Используя оператор ||

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}
