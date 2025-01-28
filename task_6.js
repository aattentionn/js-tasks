// 6. Состоит ли строка из одного слова?

function oneWord(string) {

    if (string === "") {
        return false;
    };

    return string.trim().split(' ').length === 1
    
}

oneWord("");
oneWord("Hello");
oneWord("Hello World");
oneWord(" Hello World ");

// для оптимизации лучше не пользоваться регулярными выражениями (чаще всего используется для проверки email или строки определенного формата)
