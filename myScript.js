function signIn(){
    document.getElementById("sign").style.display = 'none';
    document.getElementById("signin").style.display = 'block';
}signIn();

function signUp(){
    document.getElementById("sign").style.display = 'none';
    document.getElementById("signup").style.display = 'block';
}signUp();

function back(){
    document.getElementById("signin").style.display = 'none';
    document.getElementById("signup").style.display = 'none';
    document.getElementById("sign").style.display = 'block';
}back();

function login(x){
    if(x == 'f'){
        window.open("https://www.facebook.com/")
    }
    else if(x == 'g'){
        window.open("https://myaccount.google.com/")
    }
    else if(x == 't'){
        window.open("https://twitter.com/")
    }
}login();

function HomePage(){
    window.open('Home page.html');
}