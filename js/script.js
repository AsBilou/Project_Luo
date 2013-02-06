$('.fadein').each(function() {

    var std = $(this).attr("src");
    var hover = std.replace("inactive", "hover");
    $(this).clone().insertAfter(this).attr('src', hover).removeClass('fadein').siblings().css({
        position:'absolute'
    });
    $(this).mouseenter(function() {
        $(this).stop().fadeTo(200, 0);
    }).mouseleave(function() {
            $(this).stop().fadeTo(200, 1);
        });
});