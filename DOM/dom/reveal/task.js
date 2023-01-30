const reveals = Array.from(document.querySelectorAll('.reveal'));

for (let reveal of reveals) {
  window.addEventListener('scroll', () =>{
    const top = reveal.getBoundingClientRect().top;
    if (top < window.innerHeight && top > 0) {
      reveal.classList.add('reveal_active');
    } else if(top < 0 || top > window.innerHeight) {
      reveal.classList.remove('reveal_active');
    } 
  })
}
