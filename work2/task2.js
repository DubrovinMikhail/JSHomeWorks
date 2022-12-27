const products = [
    {
        id: 1,
        name: 'milk',
        description: 'cows milk',
        sizes: [1, 1.5],
        prise: 1,
        available: true,
    },
    {
        id: 2,
        name: 'egg',
        description: 'chicken egg',
        sizes: [10, 15],
        prise: 1.2,
        available: true,
    },
    {
        id: 3,
        name: 'tomato',
        description: 'tomato chery',
        sizes: [1, 2],
        prise: 2,
        available: false,
    },
    {
        id: 4,
        name: 'bread',
        description: 'rye bread',
        sizes: [0.5, 1],
        prise: 0.5,
        available: true,
    },
    {
        id: 5,
        name: 'water',
        description: 'bottled water',
        sizes: [1, 1.5],
        prise: 0.6,
        available: true,
    },
]

const basket = [
    {
        good: 'milk',
        amount: 1,
    },
    {
        good: 'water',
        amount: 3,
    },
]


function add(productName) {
    prduckIndex = basket.findIndex(item => item.good === productName)
    if (prduckIndex < 0) {
        basket.push({good: productName, amount: 1})
    } else {
        basket[prduckIndex].amount++
    }
} 


function del (productName) {
    productIndex = basket.findIndex(item => item.good === productName)
    basket.splice(prduckIndex, 1)
}

function allDelete() {
    basket.length = 0
}

function total() {
    let sum = 0
    for (prod of basket) {
        sum += prod.amount * products.find(item => item.name ===prod.good).prise
    }
    return {
        totalAmaunt: basket.length,
        totalSumm: sum
    } 
    
}

console.log(basket);
add('milk');
del('water');
console.log(basket);
console.log(total())
add('milk');
console.log(total())
allDelete();
console.log(total())



