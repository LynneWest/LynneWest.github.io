$(window).load(function()
{	
	var nameH;
	var pH;
	var hiddenP;
	var sparking = false;
	
	function getbodyW() //return current body width
	{
		return $("body").width();		
	}
	
	function getPicH() //return header image height, calculated by width, allows for proper calculations on load
	{
		if(getbodyW() < 650)
		{			 
			return (5*getbodyW())/6;
		}
		else
		{			
			return (5*getbodyW())/12;
		}
	}
	
	function getSocialH() //return height of social link images
	{
		return $(".social img").height();
	}

	function topPicSize() //set header image as 12:5 or 6:5 based on body width
	{
		if(getbodyW() < 650)
		{
			$(".top-pic").html("<img src = 'images/LynneCarSmall.jpg'/>");			
		}
		else
		{
			$(".top-pic").html("<img src = 'images/LynneCar.jpg'/>");			
		} 				
	}	

	function namePosition() //set position of LynneFo in relation to header image
	{
		return getPicH()*0.3;
	}	

	function socialPosition() //set position of social icons 10px above bottom of header image
	{
		return getPicH()-$(".social").height()-10;
	}

	function logoPosition() //position logo with exactly half of the logo image above the bottom of header image
	{
		var logoH = $(".logo img").height();
		nameH = $(".name h1").height();
		pH = $("header p").height();
		return getPicH()-nameH-pH-getSocialH()-(logoH/2);		
	}

	function purplePosition() //position purple div directly below header image
	{
		return getPicH()-nameH-pH-getSocialH()-1;
	}

	function doTheWave() //make social icons do the wave
	{
		if(hiddenP > 0 && hiddenP < 10)
		{
			$("#1").addClass("social-jump").delay(300).queue(function() 
			{
				$("#1").removeClass("social-jump").dequeue();
				$("#2").addClass("social-jump").delay(300).queue(function() 
				{
					$("#2").removeClass("social-jump").dequeue();
					$("#3").addClass("social-jump").delay(300).queue(function() 
					{
						$("#3").removeClass("social-jump").dequeue();					
					});
				});
			});
		}		
	}

	function sparks() //display sparks gif for 2 seconds
	{
		if(sparking == false) 
		{
			$("#grind").addClass("hidden");
			$("#grind2").removeClass("hidden");
			sparking = true;

			setTimeout(function () 
			{
				$("#grind").removeClass("hidden");
				$("#grind2").addClass("hidden");
				sparking = false;				
			}, 2000)
		}		
	}

	$(document).scroll(function() 
	{
		hiddenP = $(document).scrollTop();
		var navH = $(".navbar").height();
		
		if(getPicH()-hiddenP <= navH) //darken navbar when it gets past header image
		{
			$(".navbar").addClass("scroll-nav");									
		}
		else //remove background color when navbar is above bottom of header image
		{
			$(".navbar").removeClass("scroll-nav");			
		}

		doTheWave();
		sparks();			
	});

	$(".lynneFo").css("top", namePosition());
	$(".social").css("top", socialPosition());
	$(".logo").css("top", logoPosition());
	$(".purple").css("top", purplePosition());
	topPicSize();

	$(window).resize(function() //position elements dynamically on resize
	{
		$(".lynneFo").css("top", namePosition());
		$(".social").css("top", socialPosition());
		$(".logo").css("top", logoPosition());
		$(".purple").css("top", purplePosition());
		topPicSize();		
	});
});
