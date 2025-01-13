// 8. Посчитать кол-во секунд прошедших с начала дня. Не сталкивалась прежде с датой и временем (прочитала статью на learn js).

let now = Date.now();
let startDay = new Date().setHours(0, 0, 0, 0);
let difference = Math.floor((now - startDay) / 1000);
console.log(difference);