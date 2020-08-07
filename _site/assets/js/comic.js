// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    $('html, body').animate({
        scrollTop: $("#comic").offset().top
    });


}


$(document).ready(topFunction); 

$(document).on('click', '.top-btn', topFunction); 


$(document).on('click', '.chapter-btn ', function(){
    console.log("click");
    $('#modal-container').removeAttr('class').addClass('chapter-list');

    $('.modal').css("margin-left", -$(".modal-body").width()/2);
      
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
