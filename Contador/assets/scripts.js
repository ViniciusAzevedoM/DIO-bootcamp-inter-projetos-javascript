let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const CURRENT_NUMBER_ADD = document.getElementsByName('adicionar');
const CURRENT_NUMBER_SUB = document.getElementsByName('subtrair');

function increment() {
    if (count < 9) {
        count++;
        CURRENT_NUMBER.innerHTML = count;
    }
    if (count >= 0){
        CURRENT_NUMBER.style = "color: black;";
    }
}

function decrement() {
    if (count > -9) {
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }
    if (count < 0){
        CURRENT_NUMBER.style = "color: red;";
    }
}

function listenerIncrement() {
    CURRENT_NUMBER_ADD.addEventListener("click", increment, false);
}

function listenerDecrement() {
    CURRENT_NUMBER_SUB.addEventListener("click", decrement, false);
}

document.addEventListener("DOMContentLoaded", load, false);