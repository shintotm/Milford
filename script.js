 var main = function() {
	$('.dropdown img').click(function() {
		
		$('ul.dropdown-menu').toggle();
	});
	$('form').submit(function() {
		
		 var email = $('input#email').val();
		if (email === "") {
		  $('p.email-error').text('Please enter your email.');
		}
		
		var password = $('input#password').val();
		if (password === "") {
		  $('p.password-error').text("Please enter your password.");
		}
		return false;
	});
 };
 $(document).ready(main);