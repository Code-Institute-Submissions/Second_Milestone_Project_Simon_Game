// function game () {
//   var count= 0;
//   var possibilities= ['#green','#blue', '#red', '#dark', '#yellow'];
//   var currentGame=[];

//   }

//   function sound(buttonPara){
//   	alert('hello');
//   	var button=buttonPara
//   	if (button=='blue') {
//   		new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
//   		Audio.play();
// 	}
//   else if (button=='red')
// 	{
// 		new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'); 
// 		Audio.play();
// 	}
// 	else if(buton=='dark')
// 	{
// 		new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'); 
// 		Audio.play();
// 	}
// 	else {
//       new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
//       Audio.play();

// 	}
// 	}


// function newGame() {
//   clearGame();
// }

// function clearGame() {
//   game.currentGame = 0;
//   game.count = 0;
//   addCount();
// }

// function addCount() {
//   game.count++;
//   $('#clickNumber').addClass('animated fadeOutDown');

//   setTimeout(function(){
//     $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
//   }, 200);

// }


$(document).ready(function() {


	$("#btn2").click(function() {
		var obj = document.createElement("audio");
		obj.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
		obj.volume = 0.10;
		obj.autoPlay = false;
		obj.preLoad = true;
		obj.play();
		$("#btn2").fadeIn().fadeOut(10).fadeIn(12);
	});


	$("#newGame").click(function(){
        $("#score").text('0');

	});
	});