document.getElementById('ct').innerHTML = new Date;

var slideIndex = 0;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length){
    slideIndex = 1
    }    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2500);
}
showSlides();

function profile(){
  document.getElementById('profile').style.display = 'block';
}
function closeBtn(){
  document.getElementById('profile').style.display = 'none';
}

//Cities Java Script
function payment(){
  window.open('Payment Page.html')
}

//Payment Java Script
function PaymentDone(){
  alert('Payment Successfully Done')
}