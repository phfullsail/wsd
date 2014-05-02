// JavaScript Document
(function(){
	
	/* Email input validation */
	var emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	orderForm.onsubmit = function(){
		
       	if (!emailRegEx.test(inputEmail.value)) {
			inputEmail.style.border = "solid 2px red";
			emailError.style.display = "inline";
			return false
		}
		else{
			inputEmail.style.border = "solid 2px #999";
			emailError.style.display = "none";
			return true
		}
    };



})();  
