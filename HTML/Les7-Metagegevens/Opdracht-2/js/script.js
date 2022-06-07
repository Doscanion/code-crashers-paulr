$(document).ready(function(){
	var currentdate = new Date();
	var weekday = currentdate.getDay(), monthday = currentdate.getDate(), month = currentdate.getMonth()+1, year = currentdate.getFullYear();
	switch(weekday){
		case 1:weekday = "maandag"; break;case 2:weekday = "dinsdag";break;case 3:weekday = "woensdag";break;case 4:weekday = "donderdag";break;case 5:weekday = "vrijdag";break;case 6:weekday = "zaterdag";break;case 7:weekday = "zondag";break;
		default:weekday = "onbekend";					
	}
	switch(month){
		case 1:month = "januari";break;case 2:month = "februari";break;case 3:month = "maart";break;case 4:month = "april";break;case 5:month = "mei";break;case 6:month = "juni";break;case 7:month = "juli";break;case 8:month = "augustus";break;case 9:month = "september";break;case 10:month = "oktober";break;case 11:month = "november";break;case 12:month = "december";break;
		default:month = "onbekend";					
	}				
	var dateString = weekday+", "+monthday+" "+month+" "+year;
	$("#datum").text(dateString);
	$("button").click(function(){
		$("p:first-of-type").slideToggle(2000);
		if ($(this).text() == "Verbergen"){
			$(this).text("Terughalen");
		} else {
			$(this).text("Verbergen");
		}
	});
	$("img").dblclick(function(){
		if (confirm("Weet je het zeker?")){
			$(this).addClass("altimage");
		}			
	});
});
