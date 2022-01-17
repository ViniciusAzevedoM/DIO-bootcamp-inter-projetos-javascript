var num1 = 10;
var num2 = 11;

function comparar(numero1, numero2){
    var compara = "";
    var compara10 = "";
    var compara20 = "";

    (numero1 === numero2 ? compara = "iguais" : compara = "diferentes");
    (numero1 + numero2 >= 10 ? compara10 = "maior ou igual a 10" : compara10 = "menor ou igual a que 10");
    (numero1 + numero2 <= 20 ? compara20 = "e menor ou igual a 20" : compara20 = "e maior ou igual a 20");

    return `Os números ${numero1} e ${numero2} são ${compara}. Sua soma é ${compara10} ${compara20}.`
}

console.log(comparar(num1, num2));