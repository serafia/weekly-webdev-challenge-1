$('.input-border').focusin(function() {
	$(this).addClass('active');
});
$('.input-border').focusout(function() {
	$(this).removeClass('active');
});


// Password validation

function equalPasswords() {
	if($('#password').val() === $('#confirmPassword').val()) {
		$('.equal-passwords-p').fadeOut(500);
		return true;
	} else {		
		$('.equal-passwords-p').fadeIn(500);
		return false;
	}
}
$('#terms').click(function() {
	if($('#password').val() === $('#confirmPassword').val()) {
		$('.equal-passwords-p').fadeOut(500);
		return true;
	} else {		
		$('.equal-passwords-p').fadeIn(500);
		$('#password').focus();
		return false;
	}
	
});
	
	
		
	//Phone number validation


function phonenumber() {
  	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  	if($('#phone').val() == "") {
  		$('.valid-number-p').fadeOut(500);
	}else {
		if($('#phone').val().match(phoneno)){
	     	$('.valid-number-p').fadeOut(500);
		   	return true;
		}else {
		   	$('.valid-number-p').fadeIn(500);
		   	$('#phone').focus();
		   	return false;
	    }
	}
}
  

$('#recover').click(phonenumber);

