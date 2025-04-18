document.querySelector('.xemthem').addEventListener('click', (event) => {
    event.stopPropagation()
    if (document.querySelector('.more').classList.contains('hienThi'))
        document.querySelector('.more').classList.remove('hienThi');
    else {
        document.querySelector('.more').classList.add('hienThi');
    }
});


document.body.addEventListener('click', () => {
    if (document.querySelector('.more').classList.contains('hienThi'))
        document.querySelector('.more').classList.remove('hienThi');
})

document.querySelectorAll('.RIGHT').forEach(button => {
    button.addEventListener('click', () => {
        const index = button.dataset.index;
        const container = document.querySelector('.DIVV' + index);
        container.scrollLeft += 520;
    })
})
document.querySelectorAll('.previous').forEach(button => {
    button.addEventListener('click', () => {
        const index = button.dataset.index;
        const container = document.querySelector('.DIVV' + index);
        container.scrollLeft -= 520;
    })
})
document.querySelectorAll('.DIV-container').forEach(container => {
    container.addEventListener('scroll', () => {
        document.querySelectorAll('.previous').forEach(button => {
            if (container.scrollLeft === 0) {
                button.classList.add('tanghinh');
            } else {
                button.classList.remove('tanghinh')
            }
        })
        document.querySelectorAll('.RIGHT').forEach(button=>{
            if (container.scrollLeft >= 1000) {
                button2.classList.add('tanghinh');
            } else {
                button2.classList.remove('tanghinh')
            }
        })
        
    })
})
