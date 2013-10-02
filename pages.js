$(document).ready(function(){

  /*  $('#navigation').mouseenter(function(){
	   
	   $('#bubulle').stop().fadeIn('fast');
	   });*/
	$('#navigation').mouseleave(function() {
      
	  $('#bubulle').stop().animate({left:'0px', width:'0px'}).fadeOut('fast');
	  ;
       
    });
	
	 $('#menu1').mouseenter(function(){
	   $('#bubulle').stop().fadeIn('fast').animate({left:'40px', width:'200px'},{duration:100});
	   });
	

	 $('#menu2').mouseenter(function(){
	   $('#bubulle').stop().fadeIn('fast').animate({left:'243px', width:'200px'},{duration:100});
	   });
	   
	   $('#menu3').mouseenter(function(){
	   $('#bubulle').stop().fadeIn('fast').animate({left:'450px', width:'200px'},{duration:100});
	   });
	   
	   $('#menu4').mouseenter(function(){
	   $('#bubulle').stop().fadeIn('fast').animate({left:'645px', width:'200px'},{duration:100});
	   });
	  
	  $('#cv').mouseenter(function(){
	   $('#bubulle').stop().fadeIn('fast').animate({left:'0px'},{duration:100});
	   });
});



$(document).ready(function(){
   $('.icone').mouseenter(function(){
     $(this).stop().animate({left:'0px'}, {duration:500});
   });
   
   $('.icone').mouseleave(function(){
      $(this).stop().animate({left:'-15px'}, {duration:500});
   });
});








