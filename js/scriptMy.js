$('.myBtn').on('click', function() {
    $(this).toggleClass('clickedButton');

});

$('.myBtn').on('mouseover', function() {
    $(this).toggleClass('mouseoverButton');
});

$('.myBtn').on('mouseleave', function() {
    $(this).toggleClass('mouseoverButton');
});