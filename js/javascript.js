$(function(){
    //opening the menu
    $("#menu").click(function(){
        $(".sideNav").animate({width:"+=250px"}, 500);
    });
    //closing the menu
    $("#closeBtn").click(function(){
        $(".sideNav").animate({width:"-=250px"}, 500);
    });
});
