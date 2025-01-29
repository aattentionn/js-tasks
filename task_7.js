// 7. Является ли строка палиндромом. Чтобы проверить, нужно разделить строку методом сплит, обратить ее и снова объединить

function isPalindrome(string) {

    let startString = 0;
    let endString = string.length - 1;

    while (startString < endString) {
        if (string[startString] !== string[endString]) return false;
        startString++;
        endString--;
    };
    return true;
}

console.log(isPalindrome("34543"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
