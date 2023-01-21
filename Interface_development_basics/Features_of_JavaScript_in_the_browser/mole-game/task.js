let countDead = document.getElementById('dead');
let countLost = document.getElementById('lost');
let idList = [];

for (i=1; i<10; i++) {
    idList.push(`hole${i}`);
}

for (id of idList) {
    let hole = document.getElementById(id);
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            if (Number(countDead.textContent) < 9) {
                countDead.textContent = Number(countDead.textContent) + 1;
            } else{
                alert('Победа')
                countDead.textContent = 0
                countLost.textContent = 0
            }
        } else if(hole.className.includes('hole')) {
            if (Number(countLost.textContent) < 4) {
                countLost.textContent = Number(countLost.textContent) + 1;
            } else{
                alert('Проигрышь')
                countDead.textContent = 0
                countLost.textContent = 0
            }
        }
    }
}

