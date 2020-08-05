// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({
        scrollTop: $("#comic").offset().top
    });
}


$(document).ready(topFunction); 

