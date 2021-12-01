$(document).ready(function(){
    $('.slider-slick').slick({
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        adaptiveHeight: true,
        cssEase: 'ease-in-out',
        prevArrow: '<button class="intro-slider__arrow prev"></button>',
        nextArrow: '<button class="intro-slider__arrow next"></button>'
    });
});

window.onload = function menuToggle() {
    $menuBtn = $('.burger-menuBtn');
    $menu = $('.burger-menu');

    $menuBtn.on('click', function() {
        $menu.toggleClass('open');
    });

    $menu.find('a').on('click', function() {
        $menu.removeClass('open');
    });
}
