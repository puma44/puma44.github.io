$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrowleft.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrowright.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false                  
                    }
            }
        ]
    });
});