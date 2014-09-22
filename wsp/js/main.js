/*  
	Web Standards Project
	Author: Pamela Holmes
*/

(function($){

/************** Home navigation ***************/
	$(".linkHome").click(function(e) {
		e.preventDefault();
		window.location.assign("index.html");
	});

/************** Spots navigation ***************/	
	$(".linkSpots").click(function(e) {
		e.preventDefault();
		window.location.assign("spots.html");
	});

/************* Search Button *******************/
	$("#btnFilters").click(function(e) {
		e.preventDefault();
		window.location.assign("results.html");
	});

	$(".imgKidParty").click(function(e) {
		e.preventDefault();
		window.location.assign("results.html");
	});


	$(".result-detail-active").click(function(e) {
		e.preventDefault();
		window.location.assign("details.html");
	});

	$("#pirateLink").click(function(e) {
		e.preventDefault();
		window.location.assign("details.html");
	});

	$(".pinterest-link").click(function(e) {
		e.preventDefault();
		window.open("http://www.pinterest.com/", "_blank");
	});

	$(".twitter-link").click(function(e) {
		e.preventDefault();
		window.open("https://twitter.com/?lang=en", "_blank");
	});


	$(".fb-link").click(function(e) {
			e.preventDefault();
			window.open("https://www.facebook.com/", "_blank");
	});

	$(".pinterest-link").mouseover(function() {
		
	}) 


	/********** Enable Bootstrap-Select ************/
	 $('.selectpicker').selectpicker();

	
})(jQuery); // end private scope