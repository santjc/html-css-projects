$(document).ready(function () {
    $('.menu-logo').click(function () {
        $("nav").toggle("slide");
    });

    $('.close-menu').click(function () {
        $("nav").toggle("slide");
    });
});

$(function () {
    var now = new Date();
    // Create a calendar with default settings
    $("#calendar").mobiscroll().calendar({
        onInit: function (event, inst) {
            inst.setVal(now, true);
        },
        theme: 'mobiscroll',
        dateFormat: 'D, dd M yy',
        yearChange: false,
    });
});