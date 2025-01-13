// 6. Состоит ли строка из одного слова?

function oneWord(string) {

    return string.trim().split(/\s+/).length === 1
    
}

console.log(oneWord("")); // подсмотрела, что можно сделать проверку через filter, чтобы пустая строка возвращалась false, но как сделать по-другому не понимаю

oneWord("Hello");
oneWord("Hello World");
oneWord(" Hello World ");