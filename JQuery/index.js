$("h1").css("color", "red");
$("h1").text("Bye There");
$("h1").click(function(){
    $("h1").css("color", "purple");
});
$("h1").on("mouseover", function (){
    $("h1").css("color", "yellow");
})

$("button.button1").click(function(){
    $("h1").toggle();
})
$("button.button2").click(function(){
    $("h1").fadeToggle();
})
$("button.button3").click(function(){
    $("h1").slideToggle();
})

$("a").attr("href", "https://duckduckgo.com/");

$(document).keypress(function (event){
    $("h1").text(event.key)
})