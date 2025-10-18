const galleryMain = document.querySelector('.gallery__main');
const gallerySub = document.querySelectorAll('.gallery__sub');
const btnMore = document.querySelector('.counter__more');
const btnLess = document.querySelector('.counter__less');
let counterAmount = document.querySelector('input[type="number"]')
const addToCart = document.querySelector('.btn-cart');
const btnCart = document.querySelector('.cart');
const boxCart = document.querySelector('.box-cart');
let contentCar = document.querySelector('.box-cart__alert');
let titleProduct = document.querySelector('.product__title');
let valueProduct = document.querySelector('.product__value');
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

btnCart.addEventListener('click', function (e) {
    e.preventDefault();

    if (boxCart.style.display === "block") {
        boxCart.style.display = "none";
    } else {
        boxCart.style.display = "block";
    }
})


addToCart.addEventListener('click', function (e) {
    e.preventDefault();

    if (counterAmount.value <= 0) {
        contentCar.querySelector('.box-cart__item').textContent = `Your cart is empty.`;
    } else {
        const valueTitle = titleProduct.textContent;
        const imgSrc = galleryMain.src;  // <- aqui é necessário
        let priceNumber = parseFloat(valueProduct.textContent.replace('$', '').trim());
        let totalSum = priceNumber * Number(counterAmount.value); contentCar.innerHTML = `
          <img src="${imgSrc}" alt="${valueTitle}" width="40" height="40">
          <p>${valueTitle} x ${counterAmount.value} <br><strong>$:${totalSum.toFixed(2)}</strong></p>
        `;
    }
    if (boxCart.style.display === "block") {
        boxCart.style.display = "none";
    } else {
        boxCart.style.display = "block";
    }
    counterAmount.value = 0;
});