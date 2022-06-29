const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
const close_menu = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

//navigation - active
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

//background when scrolling
document.addEventListener('scroll',() =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 350){
        header.style.backgroundColor = 'rgba(105, 105, 105,0.887)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
})
//close  menu
close_menu.forEach((item) =>{
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
