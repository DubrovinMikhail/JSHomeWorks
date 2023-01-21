let slids = Array.from( document.querySelector('.slider__items').querySelectorAll('.slider__item'));
let prev = document.getElementsByClassName('slider__navigation')[0].getElementsByClassName('slider__arrow_prev')[0];
let next = document.getElementsByClassName('slider__navigation')[0].getElementsByClassName('slider__arrow_next')[0];

getSlid = slidId => slids[slidId]
aktivateSlide = slidId => getSlid(slidId).className = 'slider__item slider__item_active'
deaktivateSlide = slidId => getSlid(slidId).className = 'slider__item'

let slidId = 0

prev.onclick = () => {
  deaktivateSlide(slidId)
  if (slidId === 0) {
    slidId = slids.length-1
  } else {
  --slidId;
  }
  aktivateSlide(slidId)
}

next.onclick = () => {
  deaktivateSlide(slidId)
  if (slidId === slids.length-1) {
    slidId = 0
  } else {
  ++slidId;
  }
  aktivateSlide(slidId)
}
