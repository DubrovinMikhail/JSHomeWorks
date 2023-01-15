PASSWORD = 'pasw'

function getPasswordChecker(password) {
    return function(chekPassword) {
        return password === chekPassword
    }
}
const pass = getPasswordChecker('pass')
console.log(pass('pass'))
console.log(pass('pass1'))