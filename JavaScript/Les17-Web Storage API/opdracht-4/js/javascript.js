if (localStorage.getItem('backgroundcolor')) {
    color = localStorage.getItem('backgroundcolor');
    document.body.style.backgroundColor = color;
    console.log('bestaat');
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(){
        for (const name in this.dataset) {
            console.log(this.dataset.hasOwnProperty(name));
            if(this.dataset.hasOwnProperty(name)){
                const color = this.dataset[name];
                localStorage.setItem('backgroundcolor', color);
                document.body.style.backgroundColor = color;
            }
        }
    })
});