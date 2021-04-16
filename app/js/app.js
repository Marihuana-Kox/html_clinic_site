// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	$(window).on('unload', function(){
		document.cookie = 'countCookie=;secure';
	})
	//parallax
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop()
		var offset = $('.service-img-parallax').offset().top
		var offset2 = $('.price-img-parallax').offset().top


		function counterIng(s,i,b,c) {
			 setTimeout(function () {
					$(c).text(i)
					i++;
					if (i <= b) {
						 counterIng(s,i,b,c);
					}
			 }, s)
		}

		function count_cookie(){
					var coo = document.cookie.split('; ').find(row => row.startsWith('countCookie'))
					if (!coo.split('=')[1]) {
						document.cookie = 'countCookie=True;secure';
						return 'True'
	  			}
		}
		
		if (scrollTop > 650) {

			var x = count_cookie()

			var d = new Date()
			var year = d.getFullYear()
			var work_year = year - 2000

			if(x == 'True'){
				counterIng(400, 11, work_year,'.numeric1 > span')
				counterIng(6, 6126, 6472,'.numeric2 > span')
			}
		}

		if (offset - scrollTop < 800){
			var pr = (offset - scrollTop) / 100
			var x = pr * 8
			$('.service-img-parallax').css({'background-position-y': x + '%'})

		}
		if(offset2 - scrollTop < 600 ){
			pr = (offset2 - scrollTop) / 100
			x = pr * 8
			$('.price-img-parallax').css({'background-position-y': x + '%'})
		}
	})

	$('.burger-meny-btn').on('click', function(){

		$('.hidden-mobile-menu').slideDown(1000)

		$('a').on('click', function() {
			$('.hidden-mobile-menu').slideUp(1000)
		})
	})

	$('.btn-free-consultation-xs, .btn-free-consultation').on('click', function(){
		//Кнопка - Бесплатная консультация
		$('body').css({'overflow-y': 'hidden'})
		$('.wrapper-hidden-cover').fadeIn(1000)
		$('.phone-number-and-name').delay(1000).fadeIn(1000)
		console.log("Нажмал копку!")
	})
	$(':input[name=CancelBackCall]').on('click', function(){
		$('.phone-number-and-name').fadeOut(1000)
		$('.wrapper-hidden-cover').delay(1000).fadeOut(1000)
		$('body').css({'overflow-y': 'auto'})
	})

	$(window).scroll(function(){
		var top = $(document).scrollTop()
		if (top < 150 ) {
			$('.top-sitebar-style').removeClass('shadow-block')
		}else{
			$('.top-sitebar-style').addClass('shadow-block')
		}
	})

})
