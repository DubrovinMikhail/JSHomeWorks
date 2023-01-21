let modal_main = document.getElementById('modal_main');
let modal_success = document.getElementById('modal_success');
let showSuccess = document.querySelector('.modal a.show-success');
let btnSuccess = document.querySelector('.modal a.btn_success')

modal_main.classList.add('modal_active');
let modalActive = document.getElementsByClassName('modal_active')[0];
let btnClose = modalActive.getElementsByClassName('modal__close')[0];

showSuccess.onclick = () => {
  modal_main.classList.remove('modal_active');
  modal_success.classList.add('modal_active');
  modalActive = document.getElementsByClassName('modal_active')[0];
  btnClose = modalActive.getElementsByClassName('modal__close')[0];
  btnClose.onclick = () => {
    modalActive.classList.remove('modal_active');
  }
  btnSuccess.onclick = () => {
    modal_success.classList.remove('modal_active');
  }
}
btnClose.onclick = () => {
  modalActive.classList.remove('modal_active');
}


