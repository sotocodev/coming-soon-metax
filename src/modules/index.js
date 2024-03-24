window.onload = function () {
    setTimeout(() => {
        let preloader = document.querySelector(".preloading"),
        bar = document.querySelector(".main__barra");

        preloader.classList.add("preloading_cambio");
        bar.classList.add("main__barra_animate");
    }, 1000);
}

