
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePatern = [];
var userClickedPattern = [];
var isGameStarted = false;
var isInSeqcuence = false;
var canStartOver = false;
var level = 0;

$(document).on("keypress", function(){
    if(isGameStarted == false){
        NextSequence();
        isGameStarted = true;
    }
})

$(".btn").click(function (event){
    if(isGameStarted || !isInSeqcuence){
        var userChoosenColor = $(this).attr("id");
        PlaySound(userChoosenColor);
        AnimatePress(userChoosenColor);
        userClickedPattern.push(userChoosenColor);
        CheckAnswer();
    }
});

function NextSequence(){
    userClickedPattern = [];
    isInSeqcuence = true;
    level++;
    $("h1").text("Level " + level)
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamePatern.push(randomChoosenColour);
    for (let i = 0; i < gamePatern.length; i++) {
        const element = gamePatern[i];
        setTimeout(() => {
            $("#" + element).fadeOut(100).fadeIn(100);
            PlaySound(element);
            if(i == gamePatern.length-1){
                isInSeqcuence = false
                console.log("Sequence has ended");
            }
        }, 500 * i);   
    }
    
}

function PlaySound(soundIndex){
    var audio = new Audio("./sounds/" + soundIndex + ".mp3");
    audio.play(); 
}

function AnimatePress(buttonIndex){
    $("#" + buttonIndex).addClass("pressed");
    setTimeout(function (){
        $("#" + buttonIndex).removeClass("pressed");
    }, 100);
}

function CheckAnswer(){
    for (var i = 0; i < userClickedPattern.length; i++) {
        const element = userClickedPattern[i];
        if(element == gamePatern[i]){
            console.log("True");
        }
        else{
            console.log("False");
            GameOver();
            break;
        }
        if(i == gamePatern.length-1){
            setTimeout(() => {
                NextSequence();
            }, 1000);
        }
    }
}

function GameOver(){
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 2000);
    $("h1").text("Game Over, Press Any Key to Restart");
    StartOver();
}

function StartOver(){
    gamePatern = [];
    userClickedPattern = [];
    isGameStarted = false;
    isInSeqcuence = false;
    canStartOver = false;
    level = 0;
}