class Good {
    constructor(options) {
        this.id = options.id;
        this.name = options.name;
        this.description = options.description;
        this.sizes = options.sizes;
        this.price = options.price;
        this.available = options.available;
    }

    setAvailable(available) {
        this.available = available;
    }
}

class GoodsList {
    constructor(options) { 
        this.filter = options.filter;
        this.sortPrice = options.sortPrice;
        this.sortDir = options.sortDir;
    }

    #goods = [];

    get goods() {
        return this.#goods;
    }

    get list() {
        let resultList =this.#goods.filter(good => this.filter.test(good.name));
        if (this.sortPrice) {
            if (this.sortDir) {
                resultList.sort((item1, item2) => item1.price - item2.price);
            } else {
                resultList.sort((item1, item2) => item2.price - item1.price);
            }
        }
        return(resultList);   
    }

    add(id) {
        this.#goods.push(goods[id]);
    }

    remove(id) {
        let goodIndex = this.#goods.findIndex(item => item.id === id);
        this.#goods.splice(goodIndex, 1);
    }
} 

class BasketGood extends Good {
    constructor(options, amount) {
        super(options);
        this.amount = amount;
    }
}

class Basket {
    constructor(goods) {
        this.goods = goods;
    }

    add(good, amount) {
        let goodId = this.goods.findIndex(item => item.id === good);
        if (goodId < 0) {
            this.goods.push(new BasketGood(goods[good], amount));
        } else {
            this.goods[goodId].amount += amount;
        }
    }

    remove(good, amount) {
        let goodId = this.goods.findIndex(item => item.id === good);
        if (this.goods[goodId].amount - amount > 0) {
            this.goods[goodId].amount -= amount;
        } else {
            this.goods.splice(goodId, 1);
        }
    }

    clear() {
        this.goods.length = 0;
    }

    removeUnavaillable() {
        this.goods = this.goods.filter(item => item.available);
    }

    get totalAmount() {
        return this.goods.reduce((sum, good) => sum + good.amount, 0);
    }

    get totalSum() {
        return this.goods.reduce((sum, good) => sum + good.amount * good.price, 0)
    }
}

let goods = [
    new Good({
        id: 0,
        name: "milk",
        description: "kow milk",
        sizes: [1, 1.5],
        price: 1.1,
        available: true,
    }),
    new Good({
        id: 1,
        name: 'egg',
        description: 'chicken egg',
        sizes: [10, 15],
        price: 1.2,
        available: true,
        }),
    new Good({
        id: 2,
        name: 'tomato',
        description: 'tomato chery',
        sizes: [1, 2],
        price: 2,
        available: false,
        }),
    new Good({
        id: 3,
        name: 'bread',
        description: 'rye bread',
        sizes: [0.5, 1],
        price: 0.5,
        available: true,
        }),
    new Good({
        id: 4,
        name: 'water',
        description: 'bottled water',
        sizes: [1, 1.5],
        price: 0.6,
        available: true,
        }),
];

let goodsList = [
    new GoodsList({
        filter: /milk/g,
        sortPrice: true,
        sortDir: false,   
    }),
    new GoodsList({
        filter: /.+/g,
        sortPrice: false,
        sortDir: false,   
    }),
];

let basket =  new Basket(
    [
        new BasketGood(goods[1], 2),
        new BasketGood(goods[2], 2),
        new BasketGood(goods[4], 1),
        new BasketGood(goods[3], 3),
    ]
); 

goodsList[0].add(0);
goodsList[0].add(1);
goodsList[0].add(2);
goodsList[0].add(3);

goodsList[1].add(0);
goodsList[1].add(1);
goodsList[1].add(2);
goodsList[1].add(3);

console.log(goods);
console.log(goodsList[0].goods);
console.log(goodsList[0].list);
console.log(goodsList[1].list);

console.log(basket);
console.log(basket.totalAmount);
console.log(basket.totalSum);
basket.add(0, 3);
basket.add(2, 2);
basket.remove(1, 4);
basket.removeUnavaillable();
basket.clear();

