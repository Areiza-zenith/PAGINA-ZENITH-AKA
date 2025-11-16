// ==========================================================
// 1. INICIALIZACIÓN DEL CARRUSEL PRINCIPAL (mySwiper-1)
// ==========================================================
// Este carrusel solo tiene 1 slide por vista.
var swiper1 = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination", 
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev", 
    }
});

// ==========================================================
// 2. INICIALIZACIÓN DE LOS CARRUSELES DE PRODUCTOS (mySwiper-2)
// ==========================================================
// Estos carruseles están dentro de las pestañas.
// Usamos breakpoints para que muestren 3 slides en escritorio y 1 en móvil.
var commonSwiperOptions = {
    slidesPerView: 1, // Por defecto, para móviles
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        992: {
            slidesPerView: 3, // Mostrar 3 slides en pantallas de 992px o más
        }
    }
};

// Carrusel de HAMBURGUESA (#swiper1)
var swiper2 = new Swiper("#swiper1", {
    ...commonSwiperOptions,
    navigation: {
        nextEl: "#swiper1 .swiper-button-next", 
        prevEl: "#swiper1 .swiper-button-prev",
    },
});

// Carrusel de BURRITOS (#swiper2)
var swiper3 = new Swiper("#swiper2", {
    ...commonSwiperOptions,
    navigation: {
        nextEl: "#swiper2 .swiper-button-next", 
        prevEl: "#swiper2 .swiper-button-prev",
    },
});

// Carrusel de VARIEDADES (#swiper3)
var swiper4 = new Swiper("#swiper3", {
    ...commonSwiperOptions,
    navigation: {
        nextEl: "#swiper3 .swiper-button-next", 
        prevEl: "#swiper3 .swiper-button-prev",
    },
});