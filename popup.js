//  login Section
let logIn = document.querySelector('#login');
let main = document.querySelector('#LogIn');
let closed = document.querySelector('#close_log');
let form_lo = document.querySelector("form");

// Hero Section
let hero = document.querySelector('.hero-content');

// Sign Up Section
let signUp = document.querySelector('#sign');
let mainSign = document.querySelector('#SignUp');
let closeSign = document.querySelector('.reject_signU');
let form_si = document.querySelector("#SignUp form");

//Login And Signup In Link
let signLink= document.querySelector('#Sign-Link');
let logLink= document.querySelector('#Log-Link');

//Forget Password Link
let forgetLink= document.querySelector('#forget');

//Login Popup
logIn.addEventListener('click',function(){
    main.classList.add('popup');
    mainSign.classList.remove('popup_S');
    hero.style.display = 'none';
    main.style.zIndex = '9999';
    mainSign.style.zIndex = '0';
})

closed.addEventListener('click',function(){
    main.classList.remove('popup');
    hero.style.display = 'block';
    main.style.zIndex = '0';
    mainSign.style.zIndex = '9999';
    form_lo.reset();
})

//Signin Popup
signUp.addEventListener('click',function(){
    mainSign.classList.add('popup_S');
    main.classList.remove('popup');
    hero.style.display = 'none';
    main.style.zIndex = '0';
    mainSign.style.zIndex = '9999';
})

closeSign.addEventListener('click',function(){
    mainSign.classList.remove('popup_S');
    hero.style.display = 'block';
    main.style.zIndex = '9999';
    mainSign.style.zIndex = '0';
    form_si.reset();
})

//Login And Signup In Link Popup
signLink.addEventListener('click',function(){
    mainSign.classList.add('popup_S');
    main.classList.remove('popup');
    hero.style.display = 'none';
    main.style.zIndex = '0';
    mainSign.style.zIndex = '9999';
    form_lo.reset();
})

logLink.addEventListener('click',function(){
    main.classList.add('popup');
    mainSign.classList.remove('popup_S');
    hero.style.display = 'none';
    main.style.zIndex = '9999';
    mainSign.style.zIndex = '0';
    form_si.reset();
})

//Forget Password Link Popup
forgetLink.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = "forget.html";
})

