console.log('ready');

$(document).ready(function() {
	$("#lowner-more").click(function() {
		$("#lowner-info").toggle("drop", {direction: "up"});
	});
	$("#dylo-more").click(function() {
		$("#dylo-info").toggle("drop", {direction: "up"});
	});
	$("#jenny-more").click(function() {
		$("#jenny-info").toggle("drop", {direction: "up"});
	});
	$("#xaxis-more").click(function() {
		$("#xaxis-info").toggle("drop", {direction: "up"});
	});

	// Below is code that replaces #who-am-i with items from the array on a loop.

	var whoAmIText = [
		"not a dancer",
		"a web developer with past experience in project and event management",
		"an organized and results drivien freelance web developer",
		"not a hair stylist", "a person that enjoys good and bad beer"
		];
	var numWho = whoAmIText.length;
	var i = 0;

	setInterval(function() {
		$("#who-am-i").hide().text(whoAmIText[i]).fadeIn(600);
		i = (i + 1) % numWho;
	}, 3000);

});

// Below is future work on rotating text in header.

// Plan is to take the text from the DIV and replace
// it with the the values in an array one at a time.
// Once the page load, a function should be called to
// start the replacement. It should be one at a time
// to distincling show each string. It should run indefinitely.
