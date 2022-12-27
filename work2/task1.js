function SimpleNumber(num) {
    if (num in [1, 2, 3]){
        return true
    } else {
        let count = 0
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                count++
            }
        }
        if (count < 2) {
            return true
        } else {
            return false
        }
    }
    
}


function SimpleNumberList(number) {
    let NumList = []
    let count = 0
    let num = 1
    while (count != number) {
        if (SimpleNumber(num)) {
            NumList.push(num)
            count++
        }
        num++
    }
    return NumList
    }


console.log(SimpleNumberList(process.argv[2]))
