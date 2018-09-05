import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import slick from 'slick-carousel';
import 'jquery-easing';
import 'sly-scrolling/src/sly';
import 'simplebar';
// import LazyLoad from "vanilla-lazyload";
// import 'magnific-popup';

(function ($) {

	svg4everybody();

	$(function() {

		/*Callback*/

		// $('.popup-open').magnificPopup({
		// 	type: 'inline',
		// 	midClick: true,
		// 	mainClass: 'popup-callback'
		// });

		// Lazy load

		// let piterLazyLoad = new LazyLoad({
		// 	elements_selector: "img"
		// });



		// Nav more

		function calcWidth() {
			var navwidth = 0;
			var morewidth = $('#main-nav .nav__item_more').outerWidth(true);
			$('#main-nav > li:not(.nav__item_more)').each(function() {
				navwidth += $(this).outerWidth( true );
			});
			var availablespace = $('.nav_main').outerWidth(true) - (morewidth + 100) ;

			if (navwidth > availablespace) {
				var lastItem = $('#main-nav > li:not(.nav__item_more)').last();
				lastItem.attr('data-width', lastItem.outerWidth(true));
				lastItem.prependTo($('#main-nav .nav__item_more ul'));
				calcWidth();
			} else {
				var firstMoreElement = $('#main-nav li.nav__item_more li').first();
				if (navwidth + firstMoreElement.data('width') < availablespace) {
					firstMoreElement.insertBefore($('#main-nav .nav__item_more'));
				}
			}

			if ($('.nav__item_more li').length > 0) {
				$('.nav__item_more').css('display','block');
			} else {
				$('.nav__item_more').css('display','none');
			}
		}

		$(window).on('load resize', function () {
			calcWidth();
		});


		$('.nav__item_more').on('click', function () {
			$(this).toggleClass('nav__more-show');
		});






		const $whereSlider = $('.where__days');

		if ($whereSlider.length) {
			$whereSlider.slick({
				slidesToShow: 3,
				dots: false,
				arrows: true,
				speed: 900,
				infinite: true,
				vertical: true,
				touchMove: false,
				draggable: false,
				focusOnSelect: false,
				pauseOnFocus: false,
				pauseOnHover: false,
				verticalSwiping: false,
				adaptiveHeight: true

			});
		}

		const $bestSlider = $('.best__list');

		if ($bestSlider.length) {
			$bestSlider.slick({
				slidesToShow: 1,
				dots: false,
				fade: true,
				arrows: true,
				appendArrows: $('.best__nav'),
				speed: 300,
				infinite: true,
				adaptiveHeight: true,
				prevArrow: $('.best__prev'),
				nextArrow: $('.best__next')
			});
		}




		var $frame = $('#where__day-basic-1');
		var $wrap  = $frame.parent();

		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 1,
			scrollBar: $wrap.find('.where__day-scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			// prev: $wrap.find('.where__day-prev'),
			next: $wrap.find('.where__day-next')
		});


		var $frame = $('#where__day-basic-2');
		var $wrap  = $frame.parent();

		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.where__day-scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			prev: $wrap.find('.where__day-prev'),
			next: $wrap.find('.where__day-next')
		});



		var $frame = $('#where__day-basic-3');
		var $wrap  = $frame.parent();

		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.where__day-scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			prev: $wrap.find('.where__day-prev'),
			next: $wrap.find('.where__day-next')
		});



		var $frame = $('#where__day-basic-4');
		var $wrap  = $frame.parent();

		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.where__day-scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			prev: $wrap.find('.where__day-prev'),
			next: $wrap.find('.where__day-next')
		});


		var $frame = $('#where__day-basic-5');
		var $wrap  = $frame.parent();

		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.where__day-scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			prev: $wrap.find('.where__day-prev'),
			next: $wrap.find('.where__day-next')
		});



		if ( $(window).width() < 800 ) {

			$('.broadcast__list').slick({
				dots: true,
				infinite: true
			});

			$('.u-video__list').slick({
				dots: true,
				infinite: true
			});

			$('.movie__list').slick({
				dots: true,
				infinite: true
			});

		}

		if ( $(window).width() > 800 ) {

			$('.broadcast__list').slick('unslick');

			$('.u-video__list').slick('unslick');

			$('.movie__list').slick('unslick');

		}


		if ( $(window).width() < 800 ) {

			$('.chnls__list').slick({
				dots: false,
				arrows: false,
				infinite: true
			});

		}


		// Comments

		const $commReply = $('.comments__reply');

		$commReply.on('click', function (e) {
			e.preventDefault();
			$(this).parent().parent().next('.comments__form').toggleClass('comments__form_hidden');
		});


		// Relative title tablet

		const $relTitle = $('.related__title');

		if( $(window).width() < 1025 ) {
			$relTitle.text('Новости на эту тему');
		}


		// Main text more

		const $textMore = $('.main__text-more');

		$textMore.on('click', function (e) {
			e.preventDefault();
			$(this).toggleClass('main__text-more_active');
			$(this).parent().toggleClass('main__text_full');
		});



		$('.districts__link').on('click', function (e) {
			// e.preventDefault();

			$('.districts__list-w').attr('data-district-choose', $(this).text());

		});



		// Main height

		const $sideFirst = $('.main__sidebar_first');
		const sideFirstHeight = $sideFirst.height();

		if ( $sideFirst.length ) {

			$('.main__w_3').css('min-height', sideFirstHeight);

		}



		// Category text

		// const $catTextMore = $('.category__text-more');

		// $catTextMore.on('click', function (e) {
		// 	e.preventDefault();
		// 	$(this).parent().toggleClass('category__text_full');
		// });


		// Validation

		// const form = $('#wpcf7-f630-p441-o1 form');

		// $.validator.setDefaults({
		// 	errorPlacement: function (error, element) {
		// 		element
		// 			.prev()
		// 			.attr("placeholder", error[0].outerText);
		// 	}
		// });

			// const formSec = $('#wpcf7-f635-o1 form');

		// formSec.validate({
		// 	rules: {
		// 		name_1 : {
		// 			required: true
		// 		},
		// 		email_1: {
		// 			required: true,
		// 			email: true
		// 		},
		// 		message_1: {
		// 			required: true
		// 		}
		// 	},
		// 	message: {
		// 		name_1: {
		// 			required: ''
		// 		},
		// 		email_1: {
		// 			required: '',
		// 			email: ''
		// 		},
		// 		message_1: {
		// 			required: ''
		// 		}
		// 	}
		// });


		// const formThird = $('#wpcf7-f635-o2 form');

		// formThird.validate({
		// 	rules: {
		// 		name_1 : {
		// 			required: true
		// 		},
		// 		email_1: {
		// 			required: true,
		// 			email: true
		// 		},
		// 		message_1: {
		// 			required: true
		// 		}
		// 	},
		// 	message: {
		// 		name_1: {
		// 			required: ''
		// 		},
		// 		email_1: {
		// 			required: '',
		// 			email: ''
		// 		},
		// 		message_1: {
		// 			required: ''
		// 		}
		// 	}
		// });


	function pageWidget(pages) {
		var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
		widgetWrap.prependTo("body");
		for (var i = 0; i < pages.length; i++) {
			$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
		}
		var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
		widgetStilization.prependTo(".widget_wrap");
	}

	pageWidget([
		'index',
		'category',
		'article',
		'videos',
		'districts',
		'district',
		'persons',
		'person',
		'broadcasts',
		'broadcast',
		'channels'
		]);
	});


})(jQuery);
