document.addEventListener('DOMContentLoaded', () => {
const calculate = document.querySelector('.calculate');
const input = document.querySelector('.input');
const check = document.querySelector('.check');

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}

let firstNum = getRandomNumber(1, 9);
let secondNum = getRandomNumber(1, 9);

calculate.textContent = `${firstNum} * ${secondNum}`;



check.addEventListener('click', () => {
    //console.log(input.value) //строка
    if (input.value === " "){
        console.log("Пожалуйста, введите число.");
        return;
    }

    if ((firstNum * secondNum) === Number(input.value)) {
        console.log("ВЕРНО");
         firstNum = getRandomNumber(1,9);
           secondNum = getRandomNumber(1,9);


calculate.textContent = `${firstNum} * ${secondNum}`;
    } else {
        console.log("Не верно!")
    }
    input.value = '';
    input.focus();
    
})
})
