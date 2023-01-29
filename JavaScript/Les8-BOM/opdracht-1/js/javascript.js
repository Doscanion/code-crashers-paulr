addEventListener('resize', function () {
    this.document.querySelector('#size-x').innerHTML = this.window.innerWidth;
    this.document.querySelector('#size-y').innerHTML = this.window.innerHeight;
});

addEventListener('scroll', function () {
    this.document.querySelector('#pos-x').innerHTML = this.window.scrollX;
    this.document.querySelector('#pos-y').innerHTML = this.window.scrollY;
});

addEventListener('load', function () {
    this.document.querySelector('#size-x').innerHTML = this.window.innerWidth;
    this.document.querySelector('#size-y').innerHTML = this.window.innerHeight;
    this.document.querySelector('#pos-x').innerHTML = this.window.scrollX;
    this.document.querySelector('#pos-y').innerHTML = this.window.scrollY;
});
