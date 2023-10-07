document.querySelectorAll('figure').forEach(album => {
    album.addEventListener('click', function(){
        const albumname = this.querySelector('img').getAttribute('alt');
        let figcaption = this.querySelector('figcaption');
        if (this.getAttribute('data-clicked') === null || this.getAttribute('data-clicked') === '') {
            this.setAttribute('data-clicked', 1);

            let span = document.createElement('span')
            let text = document.createTextNode(' - 1')
            span.appendChild(text);
            figcaption.append(span);
            
        } else {
            let number = parseInt(this.getAttribute('data-clicked')) + 1;
            this.setAttribute('data-clicked', number);
            figcaption.querySelector('span').innerHTML = ' - ' + number;

        }
        
        alert('U heeft geklikt op het album ' + albumname + ' van ' + this.dataset.artist + ' uit ' + this.dataset.year);
        

    });
});



