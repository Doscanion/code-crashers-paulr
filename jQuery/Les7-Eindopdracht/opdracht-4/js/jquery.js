var video = document.getElementById("miniVideo");

$("#playButton").on("click", function () {
	console.log("play");
	video.play();
});

$("#pauseButton").on("click", function () {
	video.pause();
});

$("#product-arrow-left").on("click", function () {
	const productWidth = $(".product-info").first().outerWidth();
	$(".slide").animate({ scrollLeft: "-=" + productWidth }, "fast");
});

$("#product-arrow-right").on("click", function () {
	const productWidth = $(".product-info").first().outerWidth();
	$(".slide").animate({ scrollLeft: "+=" + productWidth }, "fast");
});

$("#popup").dialog({
	autoOpen: false,
	modal: true,
	width: 400,
	resizable: false,
	open: function () {
		$(this).css({
			"background-color": "gray",
			opacity: "1",
		});
	},
});

$("#subscribe").on("click", function () {
	$("#popup").dialog("open");
});

if ($(".main-slider .slider-img").length > 0) {
	$(".main-slider .slider-img").bxSlider({
		mode: "fade",
		captions: true,
		auto: true,
		pause: 3000,
		controls: true,
	});
}

$(".svg-circle").on("click", function () {
	$dataTarget = $(this).data("target");
	if ($(this).attr("src") == "./img/minus.svg") {
		console.log("minus");
		$(".svg-circle[data-target='" + $dataTarget + "']").attr("src", "./img/plus.svg");
	} else if ($(this).attr("src") == "./img/plus.svg") {
		console.log("plus");
		$(".svg-circle[data-target='" + $dataTarget + "']").attr("src", "./img/minus.svg");
	}
});
