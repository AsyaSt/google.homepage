let lakyButton = document.body.querySelector('#laky');
let lakyImage = document.body.querySelector('.logo_img');

lakyButton.addEventListener("click", function(e) {
    (lakyImage.src.indexOf('Googlelogo') === -1) ? lakyImage.src = '/images/Googlelogo.svg.png' : lakyImage.src = '/images/ilmakeup.svg';
}, false);