//1. Посчитать сумму цифр трехзначного числа. Трехзначные числа от 100 до 999. Чтобы посчитать сумму чисел, нам нужно разделить число на цифры и сложить их.


function sumNums(num) {

    if (num < 100 || num > 999) {
        return "Введи трехзначное число!"
    };

       let symbols = String(num).split('');
       let sum = symbols.reduce((acc, symbol) => acc + parseInt(symbol), 0);
       return sum;
    
}

sumNums(100);