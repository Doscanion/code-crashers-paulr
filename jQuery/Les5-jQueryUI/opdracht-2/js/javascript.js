$('body').css('background-color', 'green');
$('#container').css("display", 'flex');
$('#container').css("flex-wrap", 'wrap');
$('#container').css("gap", '10px');
$('p').css('display', 'none');

let i = 0;
let count;

$('img').on('dblclick', function(){
    orderImages()
    i = i + 1;
    console.log(i)
    count = 'Opened dialog ' + i.toString() + '\n'
    let dialog = $('<div></div>');
    console.log(this.alt)
    if(this.alt === 'gewone-pad'){
        let dialogText = $('#gewonepad').text() + count;
        dialog.text(dialogText);
        dialog.dialog();
    } else if(this.alt === 'groene-kikker'){
        let dialogText = $('#groene-kikker').text() + count;
        dialog.text(dialogText);
        dialog.dialog();
    }
    else if(this.alt === 'klauwkikker'){
        let dialogText = $('#klauwkikker').text() + count;
        dialog.text(dialogText);
        dialog.dialog();
    }
    else {
        let dialogText = $('#knoflookpad').text() + count;
        dialog.text(dialogText);
        dialog.dialog();
    }
    
})

function orderImages() {
    const orderNumber = Array.from({ length: 4 }, (_, index) => index + 1)
      .sort(() => Math.random() - 0.5);
    document.getElementById("groene-kikker-image").style.order = `${orderNumber[0]}`;
    document.getElementById("gewonepad-image").style.order = `${orderNumber[1]}`;
    document.getElementById("klauwkikker-image").style.order = `${orderNumber[2]}`;
    document.getElementById("knoflookpad-image").style.order = `${orderNumber[3]}`;
}