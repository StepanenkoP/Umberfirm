$(document).ready(function() {
	
	$(".slider_wrapper").owlCarousel( {
		items:5,
		loop: true,
		margin: 14,
		nav : true,
		navText : "",
		responsive: {
			0:{
				items:1
			},
			370:{
				items:2
			},
			700:{
				items:3
			},
			992:{
				items:5
			}
		}
	});

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert($(".email").val() +" - Вы подписались на нашу рассылку!");
			setTimeout(function() {
				$.magnificPopup.close();
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

});