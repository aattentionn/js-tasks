// 4. Из исходного массива создать новый, элементами которого являются удвоенные элементы исходного. Создать новый массив можно при помощи метода map


const arr = [1, 15, 21, 34, 46, 58, 79, 83, 124];

const newArr = arr.map(function (num){
    return num * num; // или num возведенная в степень 2
})

console.log(newArr);