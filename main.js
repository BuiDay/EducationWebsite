const nav = document.querySelector('nav')

window.addEventListener('scroll',()=>{
    nav.classList.toggle('window-srcoll', window.scrollY>50)
})