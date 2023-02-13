const editor = document.getElementById('editor');
const text = localStorage.getItem('text');

editor.value = text;

editor.addEventListener('input', event => {
  localStorage.setItem('text', event.target.value);
})

