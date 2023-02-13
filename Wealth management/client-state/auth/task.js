const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const form = document.forms.signin__form;
const autorizationStatus = localStorage.getItem('success');
const userId = document.getElementById('user_id');

if (autorizationStatus === 'true') {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userId.textContent = localStorage.getItem('userId');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const xhr = new XMLHttpRequest;

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      response = JSON.parse(xhr.responseText);
      localStorage.setItem('success', response.success);
      localStorage.setItem('userId', response.user_id);
      if (!response.success) {
        alert('неверный логин или пароль');
      };
    };
  });
  
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  
  xhr.send(data);
});