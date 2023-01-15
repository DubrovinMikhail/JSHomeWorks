const rl = require('readline').createInterface(process.stdin,process.stdout);


const number = Math.floor(Math.random()* 100);
let guesses = 1;

// console.log(number)

function question() {
    rl.question(`Попытка номер ${guesses}. Введите пожалуйста число: `, data => {
        if (number > +data ) {
            console.log(`Загаданное число больше чем ${data}`);
            guesses++
        }else if(number < +data) {
            console.log(`Загаданное число меньше чем ${data}`);
            guesses++
        }else if (+data === number) {
            console.log('Nice!');
            console.log(`Поздравляю Вы угадали число ${number}, с ${guesses} раза`)
            rl.close();
            return
        }else if (data == 'quit') {
            rl.close();
            return
        }
        question();
    })
}

question();
