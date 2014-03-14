 $(document).ready(function (){

 	$(".submit").click(function(e){
 		e.preventDefault(); 
   		var minutes = $('#minutes').val();
     	var metric = minutes/60;
     	var metricRound = Math.round(metric*100)/100;

        $('#result').html('');
        $('#result').html(metricRound +' ' + ' hundradelar');

	});
	 		
	    var num = parseFloat($("#minutes").val());
	    var new_num = $("#minutes").val(num.toFixed(2));


	  
});

  // $(document).on('mouseover', '.nr31', function(event) { //gör så att hela hjulet snurrar när man hovrar övernr 31//
// 	event.preventDefault();
// 	$('.clock').css({
// 		'-webkit-transition': '1s',
// 		'-webkit-transform': 'rotate(180deg)'
// 	});
	
//});