// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({
        scrollTop: $("#comic").offset().top
    });
}


$(document).ready(topFunction); 

//Get the button
var mybutton = document.getElementById("top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

