(function() {
const wash = document.querySelector(".wash");
const size = document.querySelector(".size");
const delivery = document.querySelector(".delivery");
const aboutBrand = document.querySelector(".about-brand");

const desc = document.querySelector(".filter__item--desc");
const sizes = document.querySelector(".filter__item--size");
const deliverys = document.querySelector(".filter__item--del");
const aboutBrands = document.querySelector(".filter__item--brend");

const activeClass = "description__block--active";


sizes.addEventListener("click", function(deleted) {
    aboutBrand.classList.remove(activeClass);
    delivery.classList.remove(activeClass);
    wash.classList.remove(activeClass);
    size.classList.add(activeClass);
});
desc.addEventListener("click", function(deleted) {
    aboutBrand.classList.remove(activeClass);
    delivery.classList.remove(activeClass);
    size.classList.remove(activeClass);
    wash.classList.add(activeClass);
});
deliverys.addEventListener("click", function(deleted) {
    aboutBrand.classList.remove(activeClass);
    wash.classList.remove(activeClass);
    size.classList.remove(activeClass);
    delivery.classList.add(activeClass);
});
aboutBrands.addEventListener("click", function(deleted) {
    delivery.classList.remove(activeClass);
    wash.classList.remove(activeClass);
    size.classList.remove(activeClass);
    aboutBrand.classList.add(activeClass);
});
}());