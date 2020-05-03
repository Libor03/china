$(".first").hide();
$(".second").hide();
$(".third").hide();
$(".forth").hide();
$(".fifth").hide();

$("#2").hide();
$("#3").hide();
$("#4").hide();
$("#5").hide();
$("#6").hide();
$("tr:eq(1)").on("click", function(){
    $(".first").toggle(1000);
})
$("tr:eq(2)").on("click", function(){
    $(".second").toggle(1000);
})
$("tr:eq(3)").on("click", function(){
    $(".third").toggle(1000);
})
$("tr:eq(4)").on("click", function(){
    $(".forth").toggle(1000);
})
$("tr:eq(5)").on("click", function(){
    $(".fifth").toggle(1000);
})

$("#jmeno1").on("click", function(){
    $("#info").children().hide();
    $("#1").show();
})

$("#jmeno2").on("click", function(){
    $("#info").children().hide();
    $("#2").show();
})

$("#jmeno3").on("click", function(){
    $("#info").children().hide();
    $("#3").show();
})

$("#jmeno4").on("click", function(){
    $("#info").children().hide();
    $("#4").show();
})




