

function imgLoaded(img){
    var $img = $(img);

    $img.parent().addClass('loaded');
};
////////////////////////
$.fn.animationHandler = function(event, animation){
		$(this).on(event, function(){
			$(this).addClass("animated " + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$(this).removeClass('animated ' + animation)});
		});
	}
/////////////////////////


	$(".firstArrow").click(function() {
    $('html, body').animate({
        scrollTop: $(".secondSection").offset().top
    }, 650);
});

	function toGo(toGo){
    	$('html, body').animate({
    	    scrollTop: $(toGo).offset().top
    	}, 650);
	};


/////////////////////////

$(document).ready(function() {


	// $.stellar({
	// 	horizontalOffset: 50,
	// 	verticalOffset: 0,
	// 	verticalScrolling: true,
	// 	responsive: false,
	// 	scrollProperty: 'scroll',
	// 	positionProperty: 'position',
	// 	parallaxElements: true
	// });
	$(".galleryContainer").animated("slideInUp");
	$(".meAvatar").animated("rollIn");
	$(".skill-icon").animated("rollIn");
	$('.slideRight').animated("fadeInRight");
	$('.sectionDescription').animated("fadeInRight");
	$('.statsText').animated("fadeInRight");
	$('.stats>li').animated("slideInLeft");
	$('.fa-heart').animationHandler("mouseover", "swing");
	$('footer>img').animationHandler("click", "swing");
/////////////////////////

$('.firstSection').ready(function(){
	$('html,body').css({
		"opacity": "1"
	});
});

/////////////////////////

///////////////////////


	$(window).scroll(function(){
		var st = $(this).scrollTop();
		$("header").css({
			"transform":"translate(0%,-" + st/5 + "%)"
		});
		if(st>=350){
			$(".phrase").css({
			"transform":"translate(0%,-" + (st-350)/3 + "%)"
			});
		};
		if(st<750){
			$('.firstSection').css({
			backgroundPosition:"center " + (-st)/3 + "px"
			});
		};
		if(st>=1000 && st<1300){
			$(".galleryContainer").css({
				"transform":"translate(0%,-" + (st-1000)/13 + "%)"
			});
		};
		if(st>=2000 && st<3500){
			$(".textMeBlock").css({
			"background-position":"center " + (st-7900)/13 + "px"
			});
		};
		if(st>=3000){
			$("footer").css({
			"background-position":"center " + (st-3000)/10 + "px"
			});
		};
	});


/////////////////////////meAvatar animation




/////////////////////////lazy load

	$('.mix').click(function(){
		var id = $(this).attr('href');
		$(id).find('img').attr('src', $(id).find('img').attr('data-src'));
	});

	/////////////////////////
	$(function(){
		$('#Container').mixItUp();
	});

///////////////////////////////////////////////////
//POPUP
	$('.mix').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom',
			overflowY: 'scroll',// class to remove default margin from left and right side
			image: {
				verticalFit: true,
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});

	$('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true,
		overflowY: 'scroll',
		closeOnContentClick: true,
		closeBtnInside: false // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});