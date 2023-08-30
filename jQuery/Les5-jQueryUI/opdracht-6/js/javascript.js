let loadBarValue = 25
let pauseBar = false
$("#load-bar").progressbar({
    value: loadBarValue,
    max: 50
});

var intervalBar = window.setInterval(timerBar, 200);

function timerBar(){
    if(pauseBar){
        clearInterval(intervalBar);
    }
    loadBarValue += 1
    $("#load-bar").progressbar({
        value: loadBarValue,
    });
    if (loadBarValue === 50) {
        clearInterval(intervalBar);
        location.reload();
    }
    console.log(loadBarValue)
}

$('#play-button').button({
    icon: "ui-icon-play"
})
$('#pause-button').button({
    icon: "ui-icon-pause"
})
$('#fast-button').button({
    icon: "ui-icon-seek-next"
})

$('#play-button').on('click', function () {
    pauseBar = false;
    intervalBar = window.setInterval(timerBar, 200);
})

$('#pause-button').on('click', function () {
    pauseBar = true;
})

$('#fast-button').on('click', function () {
    if(loadBarValue >= 40){
        clearInterval(intervalBar);
        location.reload();
    } else {
        loadBarValue += 10;
        console.log(loadBarValue);
    }
})