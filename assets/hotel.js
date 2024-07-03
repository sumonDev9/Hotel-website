// menu toggle bar
let menu = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar");


// windows toggle
menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
})


//  light and dark mood 
let themeBtn =document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.toggle('fa-moon')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}


