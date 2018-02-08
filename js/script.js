$('.input-border').focusin(function() {
	$(this).addClass('active');
});
$('.input-border').focusout(function() {
	$(this).removeClass('active');
});