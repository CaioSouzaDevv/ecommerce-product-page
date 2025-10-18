const galleryMain = document.querySelector('.gallery__main');
const gallerySub = document.querySelectorAll('.gallery__sub');
const btnMore = document.querySelector('.counter__more');
const btnLess = document.querySelector('.counter__less');
let counterAmount = document.querySelector('input[type="number"]')

gallerySub.forEach(img => {

    img.addEventListener('click', function (e) {

        galleryMain.src = e.target.src;


        gallerySub.forEach(i => {
            i.classList.remove('gallery__sub--active');

        });
        e.target.classList.add('gallery__sub--active');

    });

});

function sumNumber() {
    btnMore.addEventListener('click', function (e) {

        e.preventDefault();
        valueInput = parseInt(counterAmount.value);

        valueInput++;

        counterAmount.value = valueInput;

    });

}

    function lessNumber() {
    btnLess.addEventListener('click', function (e) {

        e.preventDefault();
        valueInput = parseInt(counterAmount.value);

        valueInput--;

        counterAmount.value = valueInput;

    });



}
sumNumber();
lessNumber();