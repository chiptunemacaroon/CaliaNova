// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({
        scrollTop: $("#comic").offset().top
    });
}


$(document).ready(topFunction); 

$(document).on('click', '.top-btn', topFunction); 


$(document).on('click', '.pink-btn', function(){
    console.log("click");
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
})

$(document).on('click', '.close', function(){
    $('#modal-container').addClass('out');
})

$(document).mouseup(function(e) 
{
    var container = $('.modal');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('#modal-container').addClass('out');
    }
});