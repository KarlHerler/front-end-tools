/* Author: Karl Herler

*/
$(window).scroll(function() {
	if($(window).scrollTop()>30) {
		$(".topbar").slideDown('fast');
	} else {
		$(".topbar").slideUp('fast');
	}
});



// scroll spy logic
  // ================

 var activeTarget,
      $window = $(window),
      position = {},
      nav = $('body .topbar li a:link'),
      targets = nav.map(function () {
        return $(this).attr('href');
      }),
      offsets = $.map(targets, function (id) {
        return $(id).offset().top;
      });


  function setButton(id) {
  	nav.parent("li").removeClass('active');	
  	nav.parent().parent().parent("li").removeClass('active');	/*assumes this wont be a problem even though it leaks */
    if($(nav[$.inArray(id, targets)]).parent().parent().hasClass("menu-dropdown")) {
    	/* in dropdown edgecase */
    	$(nav[$.inArray(id, targets)]).parent().parent().parent("li").addClass('active');
    } else {
    	/* base case */
    	$(nav[$.inArray(id, targets)]).parent("li").addClass('active');
    }
  }

  function processScroll(e) {
  	var scrollTop = $window.scrollTop() + 10, i;
    for (i = offsets.length; i--;) {
      if (activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1])) {
        activeTarget = targets[i];
        setButton(activeTarget);
      }
    }
  }

  nav.click(function () {
    processScroll();
  });

  processScroll();

  $window.scroll(processScroll);




$("body").bind("click", function (e) {
	$('a.menu').parent("li").removeClass("open");
});


$("a.menu").click(function() {
	if ($(this).parent("li").hasClass("open")) {
		$('a.menu').parent("li").removeClass("open");
	} else {
		$(this).parent("li").toggleClass("open");
		$(this).parent().find('ul').show();
	}
	return false;
});
