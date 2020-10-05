$(document).ready(function(){

	$('[data-fancybox]').fancybox({
		touch: false,
		autoFocus: false,
		backFocus: false
	});

	$(".masked").inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	});

	$('.js-validate').validate({
		rules: {
			name: {required: true},
			phone: {required: true}
		}
	});

	function scroll() {
		$(".js-scroll").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top - 30;
			$('html, body').animate({
				scrollTop: top
			}, 1500);
		});
	}

	scroll();

	$('.case-item__photo-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: '.case-item__photo-small'
	});

	$('.case-item__photo-small').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.case-item__photo-big',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		variableWidth: true
	});

	// var numb_slider = $('.slider').attr('data-slider'),
  //   	sliders = { 
  //   		numb_slider: {
  //     		slider : '.slider'
  //   		}
  // 		};

	// $.each(sliders, function() {
	// 	$(this.slider).slick({
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		arrows: true,
	// 		dots: true,
	// 		fade: true
	// 	});
	// });

});