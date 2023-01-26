const dropValue = document.getElementsByClassName('dropdown__value')[0];
const menuElements = Array.from( document.querySelector('.dropdown__list').querySelectorAll('.dropdown__item'));

const dropValueClick = dropValue.onclick = () => {
  document.querySelector('.dropdown__list').classList.add('dropdown__list_active');
}

function elementMenuClick() {
  document.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
  dropValue.textContent = this.textContent;
  return false
}

for (let element of menuElements) {
  element.onclick = elementMenuClick;
}