$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Accountant.", "Web Developer.", "Process Automation Specialist.", "Lifelong Learner."],
		typeSpeed: 60,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

});