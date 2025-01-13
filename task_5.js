// 5. Найти сумму элементов массива

const arr = [1, 15, 21, 34, 46, 58, 79, 83, 124];

const sum = arr.reduce((acc, currentValue) => {
    return acc + currentValue;
}, 0);

console.log(sum);

//или через цикл for

/* const arr = [1, 15, 21, 34, 46, 58, 79, 83, 124];

let sum = 0;

for (i = 0; i < arr.length; i++) {

sum += arr[i];

}

console.log(sum); */