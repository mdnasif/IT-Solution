$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop()>=800 && !$('#site-header').hasClass('sticky')){
            $('#site-header').addClass('sticky'); 
        }
        else if($(window).scrollTop()<800 && $('#site-header').hasClass('sticky')){
           $('#site-header').removeClass('sticky') 
        }
    });
});

// counter section 
jQuery(document).ready(function ($) {
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
});
// wow js
new WOW().init();