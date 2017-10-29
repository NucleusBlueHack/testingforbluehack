Waves.attach('#li-img', ['waves-button', 'waves-float']);
Waves.init();         

$(document).ready(function(){
	$("#project-list").scroll(function(){
		if($(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth) {
			$("#last-item").css('opacity','1');
			$("#first-item").css('opacity','0.7');
		}else if ($(this).scrollLeft() === 0) {
			$("#first-item").css('opacity','1');
			$("#last-item").css('opacity','0.7');
		}
	});
});