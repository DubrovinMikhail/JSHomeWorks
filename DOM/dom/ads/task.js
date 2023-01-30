const rotatorsCases = Array.from(document.querySelectorAll('.rotator__case'));
const rotator = document.querySelector('.rotator');
let i = 0;
setInterval(() => {
  rotator.getElementsByClassName('rotator__case_active')[0].classList.remove('rotator__case_active');
  rotatorsCases[i].classList.add('rotator__case_active');
  i = (i + 1) % rotatorsCases.length;
},1000);
