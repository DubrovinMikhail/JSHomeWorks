const cartProducts = document.querySelector('.cart__products');
const products = document.getElementsByClassName('product');
const countButtons =document.getElementsByClassName('product__quantity-control');

let countValue = element => {
  return element.closest('.product').getElementsByClassName('product__quantity-value')[0];
}
let addButton = element => {
  return element.getElementsByClassName('product__add')[0];
};

const cartProductList = [];

for (let button of countButtons) {
  button.addEventListener('click', event => {
    let countButton = event.target;
    if (countButton.classList.contains('product__quantity-control_inc')){
      ++countValue(countButton).innerText; 
    }else if (+countValue(countButton).textContent > 0){
      --countValue(countButton).innerText;
    };
  });
};

function productAdd(id, count, img) {
  let product = document.createElement('div');
  product.className = 'cart__product';
  product.setAttribute('data-id', id);
  product.innerHTML = `<img class="cart__product-image" src=${img}>
                       <div class="cart__product-count">${count}</div>`
  return product;
};

for (let product of products) {
  let addButton = product.getElementsByClassName('product__add')[0];
  addButton.addEventListener('click', event => {
    let id = event.target.closest('.product').dataset.id;
    let img = event.target.closest('.product').getElementsByTagName('img')[0].getAttribute("src");
    let count = +countValue(event.target).textContent;
    let product = cartProductList.find(item => item.id == id);
    if (product){
      product.count += count;
      cartProducts.querySelector(`div[data-id = "${id}"]`).getElementsByClassName('cart__product-count')[0].textContent = product.count;
    } else if (count > 0){
      cartProductList.push({id, count: count, src: img});
      product = cartProductList.find(item => item.id == id);
      cartProducts.appendChild(productAdd(product.id, product.count, product.src));
    };
  });
};
