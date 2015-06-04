//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-master.ru
(function($) {
		$.fn.animated = function(inEffect) {
				$(this).css("opacity", "0").addClass("animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$(this).removeClass('animated ' + inEffect)}).waypoint(function(dir) {
						if (dir === "down") {
								$(this).addClass(inEffect).css("opacity", "1").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$(this).removeClass('animated ' + inEffect)});
						};
				}, {
						offset: "90%"
				});
				$(this)
		};
})(jQuery);