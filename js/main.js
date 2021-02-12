// Tab Content
$(document).ready(function(){
	$('#content-one').show();
	$('#content-two').hide();
	$('#content-three').hide();

	$('#tab-one').click(function(){
		$('#tab-one').addClass('active');
		$('#tab-two').removeClass('active');
		$('#tab-three').removeClass('active');

		$('#content-one').show();
		$('#content-two').hide();
		$('#content-three').hide();
	});

	$('#tab-two').click(function(){
		$('#tab-one').removeClass('active');
		$('#tab-two').addClass('active');
		$('#tab-three').removeClass('active');

		$('#content-one').hide();
		$('#content-two').show();
		$('#content-three').hide();
	});

	$('#tab-three').click(function(){
		$('#tab-one').removeClass('active');
		$('#tab-two').removeClass('active');
		$('#tab-three').addClass('active');

		$('#content-one').hide();
		$('#content-two').hide();
		$('#content-three').show();
	});
});





$(document).ready(function(){

	$('.testimonial-item').click(function(){
		$('.testimonial-item').removeClass('bg-color');
		$('.testimonial-item').addClass('bg-color-one');
	});

});