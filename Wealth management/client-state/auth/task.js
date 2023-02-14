const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const form = document.forms.signin__form;
const userId = document.getElementById('user_id');

function hideForm() {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userId.textContent = localStorage.getItem('userId');
};

if (localStorage.getItem('userId')) {
  hideForm();
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const xhr = new XMLHttpRequest;

  xhr.addEventListener('load', () => {
    if (xhr.response.user_id) {
      localStorage.setItem('userId', xhr.response.user_id);
      hideForm();
    }else {
      alert('неверный логин или пароль');
      };
    form.reset();
  });
  
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.responseType = 'json';
  xhr.send(data);
});