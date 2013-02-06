//Récuperation de toutes les div de la classe 'fadein'
//Itération sur toutes les classe récupéré.
$('.fadein').each(function() {

    //Récuperation du chemin d'access a 'limage.
    var std = $(this).attr("src");
    //Remplacement de 'inactive' par 'hover'
    var hover = std.replace("inactive", "hover");
    //Duplique la div et remplace l'image par la nouvelle
    $(this).clone().insertAfter(this).attr('src', hover).removeClass('fadein').siblings().css({
        position:'absolute'
    });
    //Gestion de la souris pour alterner les deux images
    $(this).mouseenter(function() {
        $(this).stop().fadeTo(200, 0);
    }).mouseleave(function() {
            $(this).stop().fadeTo(200, 1);
        });
});