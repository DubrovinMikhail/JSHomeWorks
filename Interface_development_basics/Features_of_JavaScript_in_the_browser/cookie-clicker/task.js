const img = document.getElementById('cookie')
const count = document.getElementById('clicker__counter')

img.onclick = () => {
    img.width += 50;
    img.height += 50;
    setTimeout(() => {
        img.width -= 50;
        img.height -= 50;
    }, 10);
    count.textContent = Number(count.textContent) + 1
    }

