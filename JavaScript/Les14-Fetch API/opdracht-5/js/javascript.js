let fetchLink;

$('#pages').on('change', function () {
    console.log(this.value);
    switch (this.value) {
        case 'apache':
            fetchLink = './apache.html';
            break;
        case 'dreadnought':
            fetchLink = './dreadnought.html';
            break;
        case 'leopard':
            fetchLink = './leopard.html';
            break;
        case 'northrop':
            fetchLink = './northrop.html';
            break;
        case 'panzer':
            fetchLink = './panzer.html';
            break;
    }
    htmlLoader();
});

function htmlLoader() {
    $link = $.ajax(fetchLink)
        .done(function (data) {
            $('#html').html(data);
        })
        .fail(function (error) {
            alert(error);
        });
}

// async function htmlLoader() {
//     try {
//         const response = await fetch(fetchLink, config);
//         const data = await response.text();
//         console.log(data);
//         htmlInner(data);
//     } catch {
//         (error) => {
//             console.error('Nope' + error);
//         };
//     }
// }

function htmlInner(data) {
    document.querySelector('#html').innerHTML = data;
}
