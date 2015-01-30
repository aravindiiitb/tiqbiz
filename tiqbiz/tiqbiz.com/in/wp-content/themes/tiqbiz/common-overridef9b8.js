new WOW().init();

jQuery(window).stellar();

jQuery(window).load(function() {
	jQuery(".status").fadeOut();
	jQuery(".preloader").delay(500).fadeOut("slow");
})

var scrollAnimationTime = 1200,
		scrollAnimation = 'easeInOutExpo';

jQuery(document).ready(function() {
	jQuery('.sticky-navigation').onePageNav({
		scrollThreshold: 0.2,
		scrollOffset: 60,
		filter: 'a[href^="#"]',
	});
	jQuery('a[href^="#"]').on('click', function(event) {
		event.preventDefault();
		var target = this.hash;
		jQuery('html, body').stop().animate({
			'scrollTop': jQuery(target).offset().top
		},
		scrollAnimationTime, scrollAnimation, function() {
			//window.location.hash = target;
		});
	});
});