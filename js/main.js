$('document').ready(function() {
    // closes responsive menu on item click
    $('.navbar ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
     // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
    // Disable autoscroll from Boostrap carousel
    $('.carousel').carousel({
        interval: false
    });
    //increase font awesome arrow icon size on hover
    var arrow = $('.fa-angle-double-up');
    $('#arrow-container i').hover(function() {
        arrow.removeClass('fa-3x');
        arrow.addClass('fa-5x');
    }, function() {
        arrow.addClass('fa-3x');
        arrow.removeClass('fa-5x');
    });
});