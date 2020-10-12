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
			top = $(id).offset().top;
			$('html, body').animate({
				scrollTop: top
			}, 1500);
		});
	}

	scroll();

	function carousel($big, $small){
		$($big).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: false,
			fade: true,
			asNavFor: $small
		});
	
		$($small).slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: $big,
			dots: false,
			arrows: false,
			centerMode: false,
			focusOnSelect: true,
			variableWidth: true
		});
	}

	carousel('#carousel-big-1', '#carousel-small-1');

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

	moment.locale('ru');
	$('.js-date').html(moment().add('days', 14).format('D MMMM YYYY'));

	function survey() {
    surveyToStep(1);
	}

	function surveyGetStep() {
		return parseInt($(".quiz-ask.active").attr("data-step"));
	}
	function surveyGetSteps() {
		return $(".quiz-ask").length;
	}

	function surveyToStep(id) {
		var count = surveyGetSteps();
		var $step = $('.quiz-ask[data-step="'+ id +'"]');
		$(".quiz-ask").removeClass("active").hide();
		$step.addClass("active").show();

		$('.quiz-progress__active').css('width', (100/count) * id + '%');
		$('.quiz-current').text(id);
		$('.quiz-all').text(count);
	}
	// function surveyPrevStep() {
	// 	surveyToStep(surveyGetStep() - 1);
	// }
	function surveyNextStep() {
		surveyToStep(surveyGetStep() + 1);
	}

	survey();

	$(".btn-next").click(function() {
		surveyNextStep();
	});

	$('[data-src="#popup-text"').fancybox({
		touch: false,
		beforeLoad: function(instance, slide){
			var text = slide.opts.$orig.data('text');
			$('#popup-text p').html(text);
		}
	});

});