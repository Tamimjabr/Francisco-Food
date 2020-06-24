$(function(){
    //opening the menu
    $("#menu").click(function(){
        $(".sideNav").fadeIn(900);
    });
    //closing the menu
    $(".closeBtn").click(function(){
        $(".sideNav").fadeOut(900);
    });
});
