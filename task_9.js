// 9. Генерировать случайные числа и сохранять список этих чисел в LocalStorage. На экране отображать эти числа списком. Не более 10 чисел, старые перетираются.  Не знакома с localstorage (прочитала статью на learnjavascipt). Задача была сложной и без gpt не получилось ее сделать

// здесь хотела добавить все элементы на страницу манипулируя DOM, но по итогу решила явно прописать их в html

/* let body = document.querySelector('body');

let h1 = document.createElement('h1');
h1.innerText = 'Случайные числа';
document.body.appendChild(h1);

let ol = document.createElement('ol');
ol.id = 'numberList';
document.body.appendChild(ol);

let button = document.createElement('button');
button.innerText = 'Сгенерировать число';
button.id = 'generateButton';
document.body.appendChild(button); */


let maxNumber = 10;
let numberList = document.querySelector('#numberList');
let generateBtn = document.querySelector('#generateBtn');

function displayNums (numbers) {
    numberList.innerHTML = '';
    for (let number of numbers) {
        let li = document.createElement('li');
        li.innerText = number;
        numberList.appendChild(li);
    }
};

function randNum() {

    let numbers = localStorage.getItem('randomNumbers')
        ? localStorage.getItem('randomNumbers').split(',').map(Number)
        : [];
    
    let newNum = Math.floor(Math.random() * 10);

    numbers.push(newNum);
    if (numbers.length > maxNumber) {
        numbers.shift();
    }

    localStorage.setItem('randomNumbers', numbers.join(','));

    displayNums(numbers);

    let storedNums = localStorage.getItem('randomNumbers')
    ? localStorage.getItem('randomNumbers').split(',').map(Number)
    : [];
    displayNums(storedNums);
};

generateBtn.addEventListener('click', randNum);