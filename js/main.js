(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    // Spinner
    // var spinner = function () {
    //     setTimeout(function () {
    //         if ($('#spinner').length > 0) {
    //             $('#spinner').removeClass('show');
    //         }
    //     }, 3);
    // };
    // spinner();

    // GSAP Animation
    gsap.to(".preloader-content img", {
        rotation: 360,
        repeat: -1,
        duration: 1,
        ease: "power1.inOut"
    });

    gsap.to(".preloader-content h1", {
        opacity: 1,
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut"
    });

    // Simulate loading and hide preloader
    window.addEventListener("load", () => {
        setTimeout(() => {
            gsap.to(".preloader", {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                    document.querySelector(".preloader").style.display = "none";
                    document.querySelector(".content").style.display = "block";
                }
            });
        }, 3000);
    });
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });

    // GSAP Animation LOGO
    gsap.from(".logo", {
        opacity: 0,
        x: -100,
        duration: 8,
        ease: "power3.out"
    });

    gsap.from(".logo i", {
        opacity: 0,
        scale: 0,
        rotation: 360,
        duration: 8,
        ease: "bounce.out",
        delay: 0.5
    });

    gsap.from(".logo span", {
        opacity: 0,
        x: 100,
        duration: 8,
        ease: "power3.out",
        delay: 1
    });

    // Whats app

    // GSAP Continuous Animation
    gsap.to(".call-btnn", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut"
    });

    gsap.to(".whatsapp-btnn", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut"
    });

    // Hover Effects
    const callBtnn = document.querySelector('.call-btnn');
    const whatsappBtnn = document.querySelector('.whatsapp-btnn');

    callBtnn.addEventListener('mouseenter', () => {
        gsap.to(callBtnn, { scale: 1.3, duration: 0.3 });
    });
    callBtnn.addEventListener('mouseleave', () => {
        gsap.to(callBtnn, { scale: 1, duration: 0.3 });
    });

    whatsappBtnn.addEventListener('mouseenter', () => {
        gsap.to(whatsappBtnn, { scale: 1.3, duration: 0.3 });
    });
    whatsappBtnn.addEventListener('mouseleave', () => {
        gsap.to(whatsappBtnn, { scale: 1, duration: 0.3 });
    });

    // Top button

    // GSAP Scroll Animation
    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }
    });

    topBtn.addEventListener("click", () => {
        gsap.to(window, { duration: 5, scrollTo: 0, ease: "power2.inOut" });
    });

    // GSAP Hover Animation
    gsap.fromTo(topBtn,
        { scale: 0.8 },
        { scale: 1, duration: 3, ease: "bounce.out", repeat: -1, yoyo: true }
    );


    

})(jQuery);

