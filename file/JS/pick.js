function change1() {
    $('#scene2').show();
    $('#scene1').hide();
}

$(document).ready(function() {
    $("#eyes > .wear-button").click(function() {
        var imgFilename = $(this).find("img").attr("src").split('/').pop();
        var newImgSrc = "../file/img/character/eyes/" + imgFilename;
        $(".chara_eye").attr("src", newImgSrc);
    });

    $("#head > .wear-button").click(function() {
        var imgFilename = $(this).find("img").attr("src").split('/').pop();
        var newImgSrc = "../file/img/character/head/" + imgFilename;
        $(".chara_hair").attr("src", newImgSrc);
    });
    
    $("#cloth > .wear-button").click(function() {
        var imgFilename = $(this).find("img").attr("src").split('/').pop();
        var newImgSrc = "../file/img/character/cloth/" + imgFilename;
        $(".chara_cloth").attr("src", newImgSrc);
    });
    
    $("#shoose > .wear-button").click(function() {
        var imgFilename = $(this).find("img").attr("src").split('/').pop();
        var newImgSrc = "../file/img/character/shoose/" + imgFilename;
        $(".chara_shoose").attr("src", newImgSrc);
    });

    $(".body_between > .change2").click(function() {
        $('#scene3').show();
        setTimeout(function() {
            $('#scene3').hide();
            $('#scene4').show();
        }, 3000);
    });
});

$(document).ready(function() {
    $(".icon-list").eq(0).show();

    $(".list-button").click(function() {
        var index = $(this).index();
        $(".icon-list").hide();
        $(".icon-list").eq(index).show();
    });
});

