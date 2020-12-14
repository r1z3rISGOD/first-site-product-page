(function() {
    const tshirtWhite = document.querySelector(".t-shirts-img--white");
    const tshirtBlack = document.querySelector(".t-shirts-img--black");
    const tshirtGreen = document.querySelector(".t-shirts-img--green");
    const tshirtRed = document.querySelector(".t-shirts-img--red");
    const tshirtBlue = document.querySelector(".t-shirts-img--blue");
    
    const white = document.querySelector(".white");
    const black = document.querySelector(".black");
    const green = document.querySelector(".green");
    const red = document.querySelector(".red");
    const blue = document.querySelector(".blue");
    
    const activeClass = "t-shirts-img--active";
    
    
    white.addEventListener("click", function(deleted) {
        tshirtBlack.classList.remove(activeClass);
        tshirtGreen.classList.remove(activeClass);
        tshirtRed.classList.remove(activeClass);
        tshirtBlue.classList.remove(activeClass);
        tshirtWhite.classList.add(activeClass);
    });
    black.addEventListener("click", function(deleted) {
        tshirtGreen.classList.remove(activeClass);
        tshirtRed.classList.remove(activeClass);
        tshirtBlue.classList.remove(activeClass);
        tshirtWhite.classList.remove(activeClass);
        tshirtBlack.classList.add(activeClass);
    });
    green.addEventListener("click", function(deleted) {
        tshirtBlack.classList.remove(activeClass);
        tshirtRed.classList.remove(activeClass);
        tshirtBlue.classList.remove(activeClass);
        tshirtWhite.classList.remove(activeClass);
        tshirtGreen.classList.add(activeClass);
    });
    blue.addEventListener("click", function(deleted) {
        tshirtBlack.classList.remove(activeClass);
        tshirtGreen.classList.remove(activeClass);
        tshirtRed.classList.remove(activeClass);
        tshirtWhite.classList.remove(activeClass);
        tshirtBlue.classList.add(activeClass);
    });
    red.addEventListener("click", function(deleted) {
        tshirtBlack.classList.remove(activeClass);
        tshirtGreen.classList.remove(activeClass);
        tshirtBlue.classList.remove(activeClass);
        tshirtWhite.classList.remove(activeClass);
        tshirtRed.classList.add(activeClass);
    });
    }());