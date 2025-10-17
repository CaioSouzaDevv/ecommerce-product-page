const galleryMain = document.querySelector('.gallery__main');
const gallerySub = document.querySelector('.gallery__sub');



function lightbox () {

    gallerySub.addEventListener('click', function() {

        galleryMain.src = gallerySub.src;

    });
}