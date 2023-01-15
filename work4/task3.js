const rl = require('readline').createInterface(process.stdin,process.stdout);

const number = Math.floor(Math.random()* 100);
let guesses = 1;

function question(quest) {
    return new Promise((resolve,rejects) => {
        rl.question(quest, cmd => {
            resolve(cmd);
        })
    })
} 

// console.log(number);

async function input() {
    while(true) {
        const data = await question(`Попытка номер ${guesses}. Введите пожалуйста число: `);
        if (+data < number) {
            console.log(`Загаданное число больше чем ${data}`);
            guesses++;
        }else if(+data > number) {
            console.log(`Загаданное число меньше чем ${data}`);
            guesses++;
        }else if (+data === number) {
            console.log('Nice!');
            console.log(`Поздравляю Вы угадали число ${number}, с ${guesses} раза`)
            rl.close();
            break
        }else if (data == 'quit') {
            rl.close();
            break
        }
    }
}

input()