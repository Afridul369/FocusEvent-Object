let input = document.querySelector('input');

input.addEventListener('focus',function(){
    // input.style.backgroundColor='yellow'
    // input.style.padding='20px'
    // input.classList.add('anim')

})

input.addEventListener('blur',function(){
    // input.classList.remove('anim')
})

input.addEventListener('focusin',function(){
    input.classList.add('anim')
})

input.addEventListener('focusout',function(){
    input.classList.remove('anim')
})


