// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 			anchors: ['firstPage', 'secondPage', 'thirdPage','fourthPage','fifthPage','sixthPage'],
// 	});
// });


$('#staticbar').hide();
$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
				$('#staticbar').fadeIn();
		} else {
				$('#staticbar').fadeOut();
		}
});

$(document).ready(function(){
		$('.move_top').click(function(){
				window.scrollTo(0,0);
		});
});
