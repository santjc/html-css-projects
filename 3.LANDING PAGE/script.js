$(document).ready(function () {
    $('.mobile-menu').click(function () {
        $('.nav-options').slideToggle();
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },

    });
});