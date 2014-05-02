// JavaScript Document
(function(){
	
	/* Email input validation */
	var phoneRegEx = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
    var emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	orderForm.onsubmit = function(){
		
       	if (!emailRegEx.test(inputEmail.value)) {
			inputEmail.style.border = "solid 2px red";
			phoneError.style.display = "inline";
			return false
		}
		else{
			inputEmail.style.border = "solid 2px #999";
			emailError.style.display = "none";
			return true
		}
    };



})();  // end wrapper
