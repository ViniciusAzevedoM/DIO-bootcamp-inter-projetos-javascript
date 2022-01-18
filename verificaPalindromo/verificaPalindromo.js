//Primeira método de verificação
function verifica(string) {
    if (!string) return "String não existe. Favor, digitar uma string.";

    return string.split("").reverse().join("") === string;
}

console.log(verifica("cacto"));

//Segundo método de verificação
function verifica2(string) {
    if (!string) return "String não existe. Favor, digitar uma string.";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verifica2("ovo"));