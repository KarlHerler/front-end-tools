/* Author: Karl Herler

*/

$(window).scroll(function() {
	if($(window).scrollTop()>30) {
		$(".topbar").slideDown('fast');
	} else {
		$(".topbar").hide();
	}
}); 






















