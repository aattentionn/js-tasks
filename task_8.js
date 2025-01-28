// 8. Посчитать кол-во секунд прошедших с начала дня. Не сталкивалась прежде с датой и временем (прочитала статью на learn js).

let now = new Date();
let hoursToSeconds = now.getHours() * 3600;
let minutesToSeconds = now.getMinutes() * 60;
let seconds = now.getSeconds();
let result = Math.floor(hoursToSeconds + minutesToSeconds + seconds);
console.log(result);
