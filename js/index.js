function questionForUserFirst(){

let userName = prompt("Введите ваше имя","");
let birthDate = +prompt(`${userName}, какой у вас год рождения?`);
let thisYear = +prompt(`Подаскажите ${userName}, какой сейчас год?`);

function calcUserAge(birthDate,thisYear){
    return thisYear - birthDate;
}

alert(userName + ", год рождения " + birthDate + ", нынешний год " + thisYear + "!" );


function checkAnswer(){
     return confirm (`${userName}, вам исполнилось ${calcUserAge(birthDate,thisYear)} ?`) 
}

function showAnswer(){
    return (checkAnswer() == true) ? ("Хех, я же машина. Я никогда не ошибаюсь!") : (`Я машина. Я никогда не ошибаюсь! ${userName}, прошу проверить введенные данные еще раз!`)
}

alert(showAnswer())

}

function calcSquareSecond(){
// заработал!! answer = n, потому что answer сам на себя не умножается...
let n = +prompt("Введите число")
let q = +prompt("Степень числа")

let answer = n;

for(let i = 1; i <= q--; i++){
  answer *= n;
}
console.log(answer);

}

function typeStairsThird(){
let i = 0
let amounOfTimes = prompt("Введите количество символов")
let firstSymbol = prompt("введите символ строк");
let lastSymbol = prompt("Введите последний символ");

for ( ; i < amounOfTimes; i++) {
   lastSymbol = firstSymbol + lastSymbol;
    console.log(lastSymbol);
}
alert("Откройте консль разработчика")
}

function showMathQuizFourth() {

    let numberOfExamples = prompt("Enter the number of examples, you want to solve","0");

    for (let i = 0; i < numberOfExamples; i++) {
        (randomExampleAndAnswer()) ; 
    }

    function randomExampleAndAnswer(){

        let a = 0;
        let b = 10;
        let numberSymbol = (randomSymbol());
        let x = randomizer(a,b);
        let n = randomizer(a,b);

        let userAnswer = prompt(randomExample());  
        alert(chekResult());

        function randomizer(a,b){
            return Math.floor(Math.random() * (b - a)) + (++a);
        }

        function randomOneToFour(a,b){
            a = 0;
            b = 4;
            return Math.floor(Math.random() * (b - a)) + (++a);
        }

        function randomSymbol(){   
            let mySymbol = randomOneToFour()
            return mySymbol == 1 ? "-" :
            mySymbol == 2 ? "+" :
            mySymbol == 3 ? "/" : 
                    "*" ;
        }

        function calcRandomAnswer() {
            return (eval((x + numberSymbol + n)));
        }

        function randomExample(){   
            return (`Solve the example: ${x} ${numberSymbol} ${n} = ...?`);
        }

        function chekResult(){
            return (userAnswer == calcRandomAnswer()) ? `Right! answer is ${calcRandomAnswer()}` : 
            `Wrong! The correct answer is ${calcRandomAnswer()}. Your answer is ${userAnswer}.` ;
        }
    }

}

