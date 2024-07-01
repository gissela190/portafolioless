document.addEventListener('DOMContentLoaded', function() {
    var enlaces = document.querySelectorAll('.box ul li a');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            window.open(this.href, '_blank');
        });
    });
    
    adaptarParaMovil();
    
    window.addEventListener('orientationchange', adaptarParaMovil);
});

function adaptarParaMovil() {
    var box = document.querySelector('.box');
    var boxImg = document.querySelector('.box img');

    if (window.innerWidth <= 768) {
        box.style.width = '80%';
        boxImg.style.width = '100%';
    } else {
        box.style.width = '500px';
        boxImg.style.width = '210px';
    }
}



