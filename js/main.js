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
});