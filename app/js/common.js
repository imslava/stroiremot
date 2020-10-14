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

	$('.js-validate-1').validate({ rules: { name: {required: true}, phone: {required: true} } });
	$('.js-validate-2').validate({ rules: { name: {required: true}, phone: {required: true} } });
	$('.js-validate-3').validate({ rules: { name: {required: true}, phone: {required: true} } });
	$('.js-validate-4').validate({ rules: { name: {required: true}, phone: {required: true} } });
	$('.js-validate-5').validate({ rules: { phone: {required: true} } });

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

	$('.case-carousel').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		centerMode: false,
		variableWidth: true
	});

	$('.case-prev').click(function() {
    $('.case-carousel').slick('prev');
  });
  $('.case-next').click(function() {
    $('.case-carousel').slick('next');
  });

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

	if($(window).width() > 475){
		var height = 460;
	}else if($(window).width() < 475 && $(window).width() > 375){
		var height = 320;
	}else if($(window).width() < 375){
		var height = 260;
	}

	$('.fotorama').fotorama({
		nav: 'thumbs',
		fit: 'cover',
		height: height,
		thumbheight: 90
	});

	if($(window).width() < 1024){
		$('.case-item, .case-item__photo, .case-item__text').css('width', $('.container').width());
	}

});