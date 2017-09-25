$(function() {
	var nav = $('.h-nav');
		wind = 	$(window);
		toTop = $('.topscroll');
// Мобильное меню
	$('.mobile-menu').click(function() {
		nav.slideToggle();
	});
	wind.resize(function(){
		if($(window).width() > 760 && nav.is(':hidden')) {
		   nav.removeAttr('style');
		}
	});
// Модальное окно
	$('.detail').click(function() {
		$(this).next().show();
	});
	$('.close').click(function() {
		$(this).parent().parent().hide();
	});
//Ajax отправка формы
	$('form').submit(function() {
		var th = $(this);
		$.ajax({
			type: 'POST',
			url: 'mail.php', 
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').slideToggle().hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				th.trigger('reset');
			}, 1000);
		});
		return false;
	});
// Плавный скролл к якорям 
	$('a[href^="#"]').on("click", function(){
		var anchor = $(this).attr('href'),
		top = $(anchor).offset().top;
		$('body,html').animate({scrollTop: top}, 'slow','swing');
		return false;
	});
// Кнопка наверх
	wind.scroll(function(){
		if ($(this).scrollTop() > $(this).height()) {
			toTop.addClass('active');
		} else {
			toTop.removeClass('active');
		}
	});
	toTop.click(function() {
		$('body,html').stop().animate({scrollTop: 0}, 'slow','swing');
	});
// Функция анимации
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css('opacity', '0').addClass('animated').waypoint(function(dir) {
				if (dir === 'down') {
					ths.addClass(inEffect).css('opacity', '1');
				};
			}, {offset: '80%'});
		});
	};		
	$('.left,.contact,.menu').animated('fadeInLeft');
	$('.right,.address,.new-item').animated('fadeInRight');
	$('h3,.comments-item').animated('zoomIn');
//Cлайдер header
$('.h-slider').slick({
	autoplay: true,
	autoplaySpeed: 5000,
	fade: true,
	arrows: false,
	pauseOnFocus:false,
	pauseOnHover:false,
	speed:3000
}); 
// Слайдер отзывов
$('.comments').slick({
	dots:true,
	responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
	]
}); 
//equalheight - одинаковая высота колонок
var eqElement = ".new-item"
$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});
});

$(window).on('load',function() {
	$('.preloader').delay(1000).fadeOut('slow');
})

