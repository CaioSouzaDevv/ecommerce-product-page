const galleryMain = document.querySelector('.gallery__main');
const gallerySub = document.querySelectorAll('.gallery__sub');



gallerySub.forEach(img => {
    img.addEventListener('click', function (e) {

        galleryMain.src = e.target.src;
    })
    
});