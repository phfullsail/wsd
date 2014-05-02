// JavaScript Document
(function(){
	
	/* Phone input validation */
	var phoneRegEx = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
    
	orderForm.onsubmit = function(){
		
       	if (!phoneRegEx.test(inputPhone.value)) {
			inputPhone.style.border = "solid 2px red";
			phoneError.style.display = "inline";
			return false
		}
		else{
			inputPhone.style.border = "solid 2px #999";
			phoneError.style.display = "none";
			return true
		}
    };



})();  // end wrapper
