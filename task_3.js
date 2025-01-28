// 3. Найти среднее арифметическое суммы четных чисел от 1 до 100. Создать цикл, посчитать количество итерации и сумму элементов после итерации


let sum = 0;
let totalEvenNumber = 100 / 2;

for (let i = 2; i <= 100; i+=2) {
    sum += i;
}

const average = sum / totalEvenNumber;
console.log(average);
