$(document).ready(function()
{
	var wordArray = []; //array of words
	var inputArray = []; //array of user entered letters
	var letterArray = []; //array of letters in displayed word

	//word constructor
	function wordTile(word) {
		this.word = word;
		wordArray.push(word);		
	};

	CAT = new wordTile("CAT");
	DOG = new wordTile("DOG");
	BED = new wordTile("BED");
	DAD = new wordTile("DAD");
	MOM = new wordTile("MOM");
	BAT = new wordTile("BAT");
	CAR = new wordTile("CAR");
	TOY = new wordTile("TOY");
	BUS = new wordTile("BUS");
	TUB = new wordTile("TUB");
	HAT = new wordTile("HAT");
	RAT = new wordTile("RAT");
	MAN = new wordTile("MAN");
	CAN = new wordTile("CAN");

	var random = function()
	    {
	        return Math.floor((Math.random()*wordArray.length));
	    };

	//clear letter boxes and result symbolsS   
	var tryAgain = function()
		{
			$(".first").html("<img class = 'big shadow' id = 'shadow1' src='images/shadow.png'>");
			$(".second").html("<img class = 'big shadow' id = 'shadow2' src='images/shadow.png'>");
			$(".third").html("<img class = 'big shadow' id = 'shadow3' src='images/shadow.png'>");
			$(".symbol").html("<div class = 'col-xs-2 symbol'></div>");
		};

	//load word and add it's letters to letterArray
	$(".wordList").html("<p class = 'word'>"+wordArray[random()]+"</p>");
	letterArray = $("p").html().split('');
		
	//when letter tile is clicked letter is added to box, shodow class removed
	//when all letters are entered test if letters input match word
	$(".tile-img").click(function()
	{
		$(this).addClass("rotated");
		
		var unRot = function()
		{
			$(".tile-img").removeClass("rotated");			
		};
		setTimeout(unRot, 300);			
				
		var img = $(this).attr('src');
		if($("#shadow1").hasClass("shadow"))
		{
			$(".first").html("<img class = 'big big-tile' src = "+img+">");
			inputArray.push($(this).attr("id"));
		}
		else if($("#shadow2").hasClass("shadow"))
		{
			$(".second").html("<img class = 'big big-tile' src = "+img+">");
			inputArray.push($(this).attr("id"));
		}
		else if($("#shadow3").hasClass("shadow"))
		{
			$(".third").html("<img class = 'big big-tile' src = "+img+">");
			inputArray.push($(this).attr("id"));			

			//test if letters match
			var word = letterArray.join();
			var input = inputArray.join();			
			if(word === input)//if match add star tiles and move onto next word
			{
				$(".symbol").html("<img class = 'big result' src = 'images/winStar.png'>");
				inputArray = [];//clear array for user input

				//move onto next word
				var next = function()
				{
					var rand = random();
	    			$(".wordList").html("<p class = 'word'>"+wordArray[rand]+"</p>");
	    			letterArray = (wordArray[rand]).split('');
	    			tryAgain();//clear letter boxes and result symbols	    			
				}
				setTimeout(next, 1500);
			}
			else
			{
				//clear inputArray
				inputArray = [];

				//add "wrong" tile
				$(".symbol").html("<img class = 'big result' src = 'images/wrong.png'>");
				
				//clear letters
				setTimeout(tryAgain, 1500);
			}		
		}
	});	
});