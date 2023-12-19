//NavBar


let navbar = document.getElementById("mobile-navbar");

function showNavbar(){
    if (navbar.style.display === "flex"){
        navbar.style.display = "none";
    }

    else{
        navbar.style.display = "flex";
    }
};



//Password

let password = document.getElementById('password');
let eye = document.getElementById('toggle');

function ShowHide(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        eye.setAttribute('src', './images/eye-slash-solid.svg');
    }
    else{
        password.setAttribute('type', 'password');
        eye.setAttribute('src', './images/eye-solid.svg');
    }
}

