const toggler = document.getElementById('nav-toggler'),
                dasboard = document.getElementById('bd-dasboard')

toggler.addEventListener('click', ()=>{
    dasboard.classList.toggle('sidebar-toggled');
})