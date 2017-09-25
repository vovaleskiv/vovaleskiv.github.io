// Анимимированое появление блоков
// Example: $('.element').animated('zoomInUp', '80%');
$(function() {
	$.fn.animated = function(inEffect,offset) {
		$(this).each(function() {
			var ths = $(this);
			ths.css('opacity', '0').addClass('animated').waypoint(function(dir) {
				if (dir === 'down') {
					ths.addClass(inEffect).css('opacity', '1');
				};
			}, {offset: offset});
		});
	};
});


$(document).ready(function() {
	
	// Мобильное меню
	$('.mobile-menu').click(function() {
		$('.h-nav').slideToggle();
	});

	$(window).resize(function(){
		if($(window).width() > 760 && $('.h-nav').is(':hidden')) {
		   $('.h-nav').removeAttr('style');
		}
	});

	$('.h-nav a').click(function() {
		if($(window).width() < 992){
			$('.h-nav').slideToggle('slow');
		}	
	});

	// Фиксированое меню
	$(window).scroll(function(){
		if ($(this).scrollTop() >30) {
			$('.h-menu').addClass('fixed');
		} 
		else {
			$('.h-menu').removeClass('fixed');
		}
	});

	//Выпадающий телефон
	$('.call').click(function() {
		$('.call-toggle').slideToggle();
	});

	// Анимация элементов при прокрутке
	$('.h-content, h4, .img-wrap, .sign-up').animated('zoomIn', '80%');
	$('.left-group .post, .offer_form, .partner-wrap').animated('fadeInLeft', '80%');
	$('.right-group .post, .note').animated('fadeInRight', '80%');
	$('.scheme-item, .tour, #gallery img, .comment').animated('fadeInUp', '80%');


	// Плавный скролл к якорям 
	$('.h-nav').on("click", "a", function(event){
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 750);
	});

});
