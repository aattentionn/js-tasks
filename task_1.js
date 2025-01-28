//1. Посчитать сумму цифр трехзначного числа. Трехзначные числа от 100 до 999.


function sumNums(num) {

    if (num < 100 || num > 999) {
        return "Введи трехзначное число!"
    };

    if (typeof num !== "number" || isNaN(num)) {
        return "Это строка!"
    };

    if (num % 1 !== 0) {
        return "Введи целое число!"
    };

    let hundreds = Math.floor(num / 100);
    let tens = Math.floor((num % 100) / 10);
    let units = num % 10;
    
    return hundreds + tens + units;   
}

sumNums(100);
sumNums(256);
sumNums(123.3);
sumNums("adfdf");
