$(document).ready(function() { 
    $('html, body').animate({
        scrollTop: $("#comic").offset().top
    });
}); 

var btn = $('#top-button');

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $("#comic").offset().top
    });
});

