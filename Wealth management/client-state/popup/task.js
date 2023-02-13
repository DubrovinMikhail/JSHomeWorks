const modal = document.getElementById('subscribe-modal');
const modalButton = modal.querySelector('.modal__close');
const modalButtonClick = localStorage.getItem('flag');

if (modalButtonClick != 'true') {
  modal.classList.add('modal_active');
};

modalButton.addEventListener('click', () => {
  localStorage.setItem('flag', true);
  modal.classList.remove('modal_active');
});