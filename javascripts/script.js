$(document).ready(function() {
	$("#lowner-more").click(function() {
		$("#lowner-info").toggle("drop");
	});
	$("#dylo-more").click(function() {
		$("#dylo-info").toggle("drop", {direction: "right"});
	});
});