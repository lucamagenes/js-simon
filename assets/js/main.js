/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* strumenti

- alert()
- Math.floor(Math.random())
- setTimeout()
- prompt ()

*/

//generare 5 numeri randomici
const randomNumbersArray = [];

for (let i = 0; i < 5; i++) {
    let randomNumbers = Math.floor(Math.random() * 100);
    randomNumbersArray.push(randomNumbers)
}
alert(randomNumbersArray);
console.log(randomNumbersArray);



//settare il countdown di 30 secondi dopo l'alert
let seconds = 31;
const countDown = setInterval(function () {
    if (seconds === 0) {
        clearInterval(countDown);
        //generare i 5 prompt per l'utente
        var userNumber
        for (let i = 0; i < 5; i++) {
            userNumber = parseInt(prompt('inserisci il numero che hai visto'))

        }
        //numeri inseriti dall'utente
        let userNumbers = [];
        userNumbers.push(userNumber)
        console.log(userNumbers);

        //risultato
        const result = checkNumbers(userNumbers)
        console.log(result);
    } else {
        seconds--
    }

    console.log(seconds);

}, 100);


function checkNumbers(array) {
    if (randomNumbersArray.includes(array)) {
        return true
    } else {
        return false
    }
}