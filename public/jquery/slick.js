jQuery(function($){
    $('#reviewSliderThumbs').on('init', function() {
        $('body').append(`<style>
			.review-slider__control .slick-current,
			.review-slider__control .slick-center,
			.review-slider__control .slick-active {
				transform: scale(1);
				border-color: transparent;
				opacity: 1;
			}
			.review-slider__control .slick-current .progress,
			.review-slider__control .slick-center .progress,
			.review-slider__control .slick-active .progress {
				opacity: 1;
			}
			.review-slider__control .slick-current .circle,
			.review-slider__control .slick-center .circle,
			.review-slider__control .slick-active .circle {
				transition: 5.3s linear;
				stroke-dasharray: 100, 100;
			}   
		</style>`);
    });

    $('#reviewSliderThumbs').on('beforeChange', function(event, slick, currentSlide, nextSlide) {

        if (nextSlide == 0) {
            var cls = 'slick-active' + (slick.options.centerMode ? ' slick-center' : '');

            setTimeout(function() {
                $('[data-slick-index="' + slick.$slides.length + '"]').addClass(cls).siblings().removeClass(cls);
                for (var i = slick.options.slidesToShow - 1; i >= 0; i--) {
                    $('[data-slick-index="' + i + '"]').addClass();
                }
            }, 10);
        }
    });

    $('#reviewSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#reviewSliderThumbs',
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        variableWidth: true,
        speed: 300,
        infinite: true
    });
    $('#reviewSlider').on('afterChange', function(event, slick, currentSlide){
        fadeInSlide(slick, currentSlide);
    });
    $('#reviewSlider').on('beforeChange', function(event, slick, currentSlide){
        fadeOutSlide(slick, currentSlide);
    });
    function fadeInSlide(slick, slide) {
        var elt = slick.$slides.get(slide);
        var child = elt.querySelector(".sliderBlock__slideWrap");

        child.classList.add('active');
    }

    function fadeOutSlide(slick, slide) {
        var elt = slick.$slides.get(slide);
        var child = elt.querySelector(".sliderBlock__slideWrap");

        child.classList.remove('active');
    }

    $('#reviewSliderThumbs').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '#reviewSlider',
        arrows: false,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true,
        speed: 300,
        infinite: true
    });
});