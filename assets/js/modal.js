$('.button').click(function(){
    var buttonId = $(this).attr('id');
$('#modal-container').removeAttr('class').addClass(buttonId);
})

$('.close').click(function(){
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