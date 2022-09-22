/*
	WEB 303 Assignment 1 - jQuery
	{Angela Myers 0796187}
*/

$(document).ready(function() {
	$("input").change(function(){
		let $salary = $('input#yearly-salary').val();
		let $percent = $('input#percent').val();
		let spend = ($salary * $percent / 100).toFixed(2);
		$("span#amount").text('$' + spend);
	});
});