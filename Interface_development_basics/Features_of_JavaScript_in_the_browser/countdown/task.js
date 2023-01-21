const start = document.getElementById('timer')

function timer() {
    if (start.textContent > 0) {
        setTimeout(() => {
            start.textContent = start.textContent -1;
            timer()
        }, 1000) 
    }else{
        alert('Вы победили в конкурсе!')
    }     
}

timer()



