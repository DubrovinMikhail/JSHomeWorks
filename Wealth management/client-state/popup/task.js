const modal = document.getElementById('subscribe-modal');
const modalButton = modal.querySelector('.modal__close');
// const modalButtonClick = getCookie('flag');

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
  if (document.cookie.includes(name)) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie.substring(name.length + 1);
  }
  return false;
} 

if (getCookie('flag') != 'true') {
  modal.classList.add('modal_active');
};

modalButton.addEventListener('click', () => {
  setCookie('flag', 'true');
  modal.classList.remove('modal_active');
  console.log(document.cookie)
});