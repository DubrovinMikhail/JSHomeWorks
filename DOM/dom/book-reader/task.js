const fontSizeControl = Array.from(document.querySelectorAll('.font-size'));
const content = document.querySelector('.book');

for (let element of fontSizeControl) {
  element.addEventListener('click', (event) => {
    const getActivConntrol = () => {
      return element.closest('.book__control').getElementsByClassName('font-size_active')[0];
    }
    getActivConntrol().classList.remove('font-size_active');
    element.classList.add('font-size_active');
    event.preventDefault();
    if (getActivConntrol().classList.contains('font-size_small')) {
      content.classList.remove('book_fs-big');
      content.classList.add('book_fs-small');
    } else if (getActivConntrol().classList.contains('font-size_big')) {
      content.classList.remove('book_fs-small');
      content.classList.add('book_fs-big');
    } else {
      content.classList.remove('book_fs-small');
      content.classList.remove('book_fs-big');
    }
  })
}


