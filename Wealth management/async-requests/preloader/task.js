const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove('loader_active');
    response = JSON.parse(xhr.responseText);
    for (let item of Object.values(response.response.Valute)) {
      let itemDiv = document.createElement('div');
      itemDiv.className = 'item';
      itemDiv.innerHTML = `<div class="item__code">
                            ${item.CharCode}
                          </div>
                          <div class="item__value">
                              ${item.Value}
                          </div>
                          <div class="item__currency">
                              руб.
                          </div>`;
      items.append(itemDiv);
    };
  };
});
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();