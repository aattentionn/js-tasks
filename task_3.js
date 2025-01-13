// 3. Найти среднее арифметическое суммы четных чисел от 1 до 100. Создать цикл, посчитать количество итерации и сумму элементов после итерации


let sum = 0;
let count = 0;

for (let i = 2; i <= 100; i+=2) {
    sum += i;
    count++;
    console.log(sum);
    console.log(count);
}

const average = sum / count;
console.log(average);