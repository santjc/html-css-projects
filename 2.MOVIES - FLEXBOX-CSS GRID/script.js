$(".mobile-filter").click(function () {
    $(".filters").slideToggle(300, function () {});
});

$(".series-item").click(function () {
    $('.popup').center();
    $(".popup").fadeToggle(300, function () {

    });
    $('.overlay').show();
});

$(".cross").click(function () {
    $(".popup").fadeToggle(300, function () {});
    $('.overlay').hide();
});

$.fn.center = function () {
    this.css("top", this.height() / 2 + $(window).scrollTop() + 50 +'px');

    return this;
}

