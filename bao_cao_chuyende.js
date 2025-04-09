document.querySelector('.xemthem').addEventListener('click', (event) =>{
    event.stopPropagation()
    if(document.querySelector('.more').classList.contains('hienThi'))
        document.querySelector('.more').classList.remove('hienThi');
    else{
        document.querySelector('.more').classList.add('hienThi');
    }
});


document.body.addEventListener('click',()=>{
    if(document.querySelector('.more').classList.contains('hienThi'))
        document.querySelector('.more').classList.remove('hienThi');
})