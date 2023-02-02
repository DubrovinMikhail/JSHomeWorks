const reveals = Array.from(document.querySelectorAll('.reveal'));

for (let reveal of reveals) {
  window.addEventListener('scroll', () =>{
    const inenerHeight = window.innerHeight
    const top  = reveal.getBoundingClientRect().top;
    if (top < inenerHeight && top > 0) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    } 
  })
}
