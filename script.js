$(window).load(function()
{	
	var nameH;
	var pH;
	var hiddenP;
	var sparking = false;
	var wave = false;
	
	function getbodyW() //return current body width
	{
		return $("body").width();		
	}
	
	var picH;
	function getPicH() //return header image height, calculated by width, includes margin width allows for proper calculations on load
	{
		picH = getbodyW();

		if(getbodyW() < 650)
		{			 
			picH = picH/2; //1:2
		}
		else
		{			
			picH = picH/4; //1:4
		}		
		
		return picH;	
	}
	
	function getSocialH() //return height of social link images
	{
		return $(".social img").height();
	}

	function topPicSize() //set header image and ratio based on body width
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

	function namePosition() //set position of LynneFo in relation to header image height
	{
		return getPicH()*0.4;
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
	
	$(function() {
		$('body').removeClass('fade-out');
	});

	function doTheWave() //make social icons do the wave
	{
		if(hiddenP > 0 && hiddenP < 150 && wave === false)
		{
			wave = true;
			$("#1").addClass("social-jump").delay(300).queue(function() 
			{
				$("#1").removeClass("social-jump").dequeue();
				$("#2").addClass("social-jump").delay(300).queue(function() 
				{
					$("#2").removeClass("social-jump").dequeue();
					$("#3").addClass("social-jump").delay(300).queue(function() 
					{
						$("#3").removeClass("social-jump").dequeue();
						wave = false;					
					});
				});
			});
		}		
	}

	function sparks() //display sparks gif for 2 seconds
	{
		if(sparking === false) 
		{
			$("#grind").addClass("hidden");
			$("#grind2").removeClass("hidden");
			sparking = true;

			setTimeout(function () 
			{
				$("#grind").removeClass("hidden");
				$("#grind2").addClass("hidden");
				sparking = false;				
			}, 1800)
		}		
	}

	$("#about-button").click(function()//show gif when about-button is clicked
	{
		sparks();
	});

	$("#grind").mouseover(function()//show gif with mouse over image
	{
		sparks();
	});
	
	function navBack()//change navbar background color based on scroll bar position
	{
		hiddenP = $(document).scrollTop()+50;
		var navH = $(".navbar").height();
		
		if(getPicH()-hiddenP <= navH) //darken navbar when it gets past header image
		{
			$(".navbar").addClass("scroll-nav");									
		}
		else //remove background color when navbar is above bottom of header image
		{
			$(".navbar").removeClass("scroll-nav");			
		}
	}
	
	$(document).scroll(function() 
	{	
		navBack();
		doTheWave();
		sparks();			
	});

	$(".lynneFo").css("top", namePosition());
	$(".social").css("top", socialPosition());
	$(".logo").css("top", logoPosition());
	$(".purple").css("top", purplePosition());
	topPicSize();
	navBack();	

	$(window).resize(function() //position elements dynamically on resize
	{
		$(".lynneFo").css("top", namePosition());
		$(".social").css("top", socialPosition());
		$(".logo").css("top", logoPosition());
		$(".purple").css("top", purplePosition());
		topPicSize();		
	});
});