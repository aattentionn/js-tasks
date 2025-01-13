// 7. Является ли строка палиндромом. Чтобы проверить, нужно разделить строку методом сплит, обратить ее и снова объединить

function isPalindrome(string) {

    return string.toLowerCase().split('').reverse().join('') == string;
}

console.log(isPalindrome("34543"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));