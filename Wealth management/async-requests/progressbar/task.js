const progress = document.getElementById('progress');
const fileForm = document.getElementById('form');

fileForm.addEventListener('submit', event => {
  event.preventDefault();
  
  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener('progress', (event) => {
    progress.value = event.loaded / event.total;
  });

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE){
    };
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  
  const formData = new FormData(fileForm);
  
  xhr.send(formData);
});