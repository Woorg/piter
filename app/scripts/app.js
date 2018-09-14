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

		// console.log(jQuery.fn.jquery);

		var styles = [
			'padding: 2px 9px',
			'background: #82B93C',
			'color: #fff',
			'display: inline-block',
			'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
			'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
			'line-height: 1.56',
			'text-align: left',
			'font-size: 18px',
			'font-weight: 400'
		].join(';');

		console.log('%c developed by igor gorlov https://webjeb.ru', styles);

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


		// Close more nav 

		let $navMoreTrigger = $('.nav__item_more .nav__link');

		$navMoreTrigger.on('click', function (e) {
			e.stopPropagation();
			$(this).parent().toggleClass('nav__more-show');

			$(document).on('click', function(e) {
				if (!$(e.target).closest('.nav__item_more ul').length) {
					$navMoreTrigger.parent().removeClass('nav__more-show');
				}
			});
		});

		// Sliders
		
		const $whereSlider = $('.where__days');
		const $bestSlider = $('.best__list');
		const $broadcastSlider = $('.broadcast__list');
		const $uvideoSlider = $('.u-video__list');
		const $movieSlider = $('.movie__list');
		const $daypicSlider = $('.day-pic__list');
		const $chanelsSlider = $('.chanels__list');

		if ($whereSlider.length) {
			$whereSlider.slick({
				slidesToShow: 3,
				dots: false,
				arrows: true,
				speed: 900,
				infinite: false,
				vertical: true,
				touchMove: false,
				draggable: false,
				focusOnSelect: false,
				pauseOnFocus: false,
				pauseOnHover: false,
				verticalSwiping: false

			});
		}
	
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

		if ($daypicSlider.length) {
			$daypicSlider.slick({
				mobileFirst: true,
				rows: 2,
				slidesPerRow: 1,
				// slidesToShow: 1,
				// slidesToScroll: 1,
				dots: false,
				infinite: false,
				autoplay: true,
				autoplaySpeed: 6000,
				pauseOnHover: true,
				pauseOnFocus: true,
				pauseOnDotsHover: true,
				waitForAnimate: true,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 800,
						settings: "unslick"
					}
				]
			});
		}

		if ($chanelsSlider.length) {
			$chanelsSlider.slick({
				mobileFirst: true,
				rows: 3,
				slidesPerRow: 1,
				// slidesToShow: 1,
				// slidesToScroll: 1,
				dots: false,
				infinite: false,
				autoplay: true,
				autoplaySpeed: 6000,
				pauseOnHover: true,
				pauseOnFocus: true,
				pauseOnDotsHover: true,
				waitForAnimate: true,
				adaptiveHeight: true,
				responsive: [
					{
						breakpoint: 800,
						settings: "unslick"
					}
				]
			});
		}

		if ($broadcastSlider.length) {
			$broadcastSlider.slick({
				mobileFirst: true,
				rows: 3,
				slidesPerRow: 1,
				// slidesToShow: 1,
				// slidesToScroll: 1,
				dots: false,
				infinite: false,
				autoplay: true,
				autoplaySpeed: 6000,
				pauseOnHover: true,
				pauseOnFocus: true,
				pauseOnDotsHover: true,
				waitForAnimate: true,
				adaptiveHeight: true,

				responsive: [
					{
						breakpoint: 800,
						settings: "unslick"
					}
				]
			});
		}

		// if ($broadcastSlider.length) {
		// 	$broadcastSlider.slick({
		// 		mobileFirst: true,
		// 		dots: true,
		// 		infinite: false,
		// 		responsive: [
		// 			{
		// 				breakpoint: 800,
		// 				settings: "unslick"
		// 			}
		// 		]
		// 	});
		// }

		if ($uvideoSlider.length) {
			$uvideoSlider.slick({
				mobileFirst: true,
				rows: 3,
				slidesPerRow: 1,
				// slidesToShow: 1,
				// slidesToScroll: 1,
				dots: false,
				infinite: false,
				autoplay: true,
				autoplaySpeed: 6000,
				pauseOnHover: true,
				pauseOnFocus: true,
				pauseOnDotsHover: true,
				waitForAnimate: true,
				adaptiveHeight: true,

				responsive: [
					{
						breakpoint: 800,
						settings: "unslick"
					}
				]
			});
		}


		// if ($uvideoSlider.length) {
		// 	$uvideoSlider.slick({
		// 		mobileFirst: true,
		// 		dots: true,
		// 		infinite: false,
		// 		responsive: [
		// 			{
		// 				breakpoint: 800,
		// 				settings: "unslick"
		// 			}
		// 		]
		// 	});
		// }

		if ($movieSlider.length) {
			$movieSlider.slick({
				mobileFirst: true,
				rows: 2,
				slidesPerRow: 1,
				// slidesToShow: 1,
				// slidesToScroll: 1,
				dots: false,
				infinite: false,
				autoplay: true,
				autoplaySpeed: 6000,
				pauseOnHover: true,
				pauseOnFocus: true,
				pauseOnDotsHover: true,
				waitForAnimate: true,
				adaptiveHeight: true,

				responsive: [
					{
						breakpoint: 800,
						settings: "unslick"
					}
				]
			});
		}

		// if ($movieSlider.length) {
		// 	$movieSlider.slick({
		// 		mobileFirst: true,
		// 		dots: true,
		// 		infinite: false,
		// 		responsive: [
		// 			{
		// 				breakpoint: 800,
		// 				settings: "unslick"
		// 			}
		// 		]
		// 	});
		// }











		var $frame  = $('#basic');
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			// forward: $wrap.find('.forward'),
			// backward: $wrap.find('.backward'),
			// prev: $wrap.find('.prev'),
			// next: $wrap.find('.next')
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});


		var $frame  = $('#basic-2');
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			// forward: $wrap.find('.forward'),
			// backward: $wrap.find('.backward'),
			// prev: $wrap.find('.prev'),
			// next: $wrap.find('.next')
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});


		var $frame  = $('#where__day-basic-1');
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			// forward: $wrap.find('.forward'),
			// backward: $wrap.find('.backward'),
			// prev: $wrap.find('.prev'),
			// next: $wrap.find('.next')
			prevPage: $wrap.find('.where__day-prev'),
			nextPage: $wrap.find('.where__day-next')
		});


		var $frame  = $('#where__day-basic-2');
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			// forward: $wrap.find('.forward'),
			// backward: $wrap.find('.backward'),
			// prev: $wrap.find('.prev'),
			// next: $wrap.find('.next')
			prevPage: $wrap.find('.where__day-prev'),
			nextPage: $wrap.find('.where__day-next')
		});

		var $frame  = $('#where__day-basic-3');
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			// forward: $wrap.find('.forward'),
			// backward: $wrap.find('.backward'),
			// prev: $wrap.find('.prev'),
			// next: $wrap.find('.next')
			prevPage: $wrap.find('.where__day-prev'),
			nextPage: $wrap.find('.where__day-next')
		});

		var $frame  = $('#where__day-basic-4');
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			// forward: $wrap.find('.forward'),
			// backward: $wrap.find('.backward'),
			// prev: $wrap.find('.prev'),
			// next: $wrap.find('.next')
			prevPage: $wrap.find('.where__day-prev'),
			nextPage: $wrap.find('.where__day-next')
		});

		var $frame  = $('#where__day-basic-5');
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			// forward: $wrap.find('.forward'),
			// backward: $wrap.find('.backward'),
			// prev: $wrap.find('.prev'),
			// next: $wrap.find('.next')
			prevPage: $wrap.find('.where__day-prev'),
			nextPage: $wrap.find('.where__day-next')
		});


		
		

		var resizeId;
		$(window).on('resize', function() {
			if ( $(window).width() < 800 ) {
				clearTimeout(resizeId);
				resizeId = setTimeout(doneResizing, 500);
			} else {
				// $broadcastSlider.slick('destroy');
				// $uvideoSlider.slick('destroy');
				// $movieSlider.slick('destroy');
			}
		});

		function doneResizing(){
			//whatever we want to do
			location.reload();

		}


		// if ( $(window).width() > 800 ) {

		// 	$('.broadcast__list').slick('unslick');

		// 	$('.u-video__list').slick('unslick');

		// 	$('.movie__list').slick('unslick');

		// }


		if ( $(window).width() < 800 ) {

			$('.chnls__list').slick({
				dots: false,
				arrows: false,
				infinite: false
			});

		}



		$('.category__news-list').slick({
			dots: false,
			arrows: true,
			infinite: false,
			slidesToShow: 3.5,
			responsive: [
				{
					breakpoint: 1315,
					settings: {
						slidesToShow: 2.5,
						dots: false
					}
				},
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 2.5,
						dots: true
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 1.2,
						dots: true,
						arrows: false
					}
				}
			]
		});

		// if ( $('.category__news-list').slick('slickCurrentSlide') > 0 ) {


		// }





		// $('.category__news-list').slick({
		// 	dots: false,
		// 	arrows: true,
		// 	infinite: false,
		// 	slidesToShow: 1,
		// 	centerMode: true,
		// 	variableWidth: true
		// });


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


		// District choose

		$('.districts__link').on('click', function (e) {
			// e.preventDefault();

			$('.districts__list-w').attr('data-district-choose', $(this).text());

		});



		// Main height

		const $sideFirst = $('.main__sidebar_first');
		const sideFirstHeight = $sideFirst.outerHeight();

		if ( $sideFirst.length ) {

			$('.main__w_3').css('min-height', sideFirstHeight);

		}


		// User rating

		$('.user__plus-val, .user__minus-val').on('click', function (e) {
			e.preventDefault();
		});


		// Category text

		// const $catTextMore = $('.category__text-more');

		// $catTextMore.on('click', function (e) {
		// 	e.preventDefault();
		// 	$(this).parent().toggleClass('category__text_full');
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
		'main',
		'category',
		'article',
		'videos',
		'districts',
		'district',
		'persons',
		'person',
		'broadcasts',
		'broadcast',
		'channels',
		'channel',
		'address-list',
		'address',
		'questionare',
		'question',
		'user-comments',
		'user-news',
		'user-videos',
		'user'
		]);
	});


})(jQuery);
