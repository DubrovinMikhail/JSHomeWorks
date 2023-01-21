let menu = document.querySelector('.menu_main');

for (link of menu.querySelectorAll('.menu__link')) {
  let menuSub = link.closest('.menu__item').querySelector('.menu_sub');
  console.log(link)
  link.onclick = () => {
    if (menuSub){
      if (!(menuSub.classList.contains('menu_active')) && (menu.getElementsByClassName('menu_active')[0])) {
        menu.getElementsByClassName('menu_active')[0].classList.remove('menu_active')
      }
      menuSub.classList.toggle('menu_active')
      return false
    }
  }
}