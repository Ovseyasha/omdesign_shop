
$(function () {

    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        appendArrows: $('.arrows'),
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-up" aria-hidden="true"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-up" aria-hidden="true"></i></button>'
    });
    // $('.blog__preview').slick({

    // });
    $('.blog__preview').each(function () {
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            // appendArrows: $('.arrows'),
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-up" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-up" aria-hidden="true"></i></button>'
        });
    });

    $('.btn__up').on('click', function (argument) {
        $('html, body').animate({
            scrollTop: 0// -60 для отступа для меню//отступ(ofset()) от верхнего края (.top)
        }, 400);
    });
    $('.btn__up').fadeOut(400);
    $(window).on('scroll', function (argument) {
        if ($(window).scrollTop() >= 300) {
            $('.btn__up').fadeIn(400);
        } else {
            $('.btn__up').fadeOut(400);
        }
    });
    $('.hide-menu__btn').on('click', function (argument) {
        $(this).next().slideToggle();// если элемент скрыт то покажет и наоборот
        // $('.a:visible').not($(this).next()).slideUp();// визибл те кто видны
    });

    $('.hide-categories__h').on('click', function (argument) {
        $(this).next().slideToggle();// если элемент скрыт то покажет и наоборот
        // $('.a:visible').not($(this).next()).slideUp();// визибл те кто видны
    });
    $('.hide-footer__header').on('click', function (argument) {
        $(this).next().slideToggle();// если элемент скрыт то покажет и наоборот
        $('.a:visible').not($(this).next()).slideUp();// визибл те кто видны
    });

});
