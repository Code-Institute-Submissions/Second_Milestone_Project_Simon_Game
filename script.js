var settings = {
    sequence: [],
    round: 0,
    playNumber: 0,
    speed: 1000,
    clicked: 0

}


$(document).ready(function() {
    var audio = $("#sound");

    function animate(anim) {


        // Increase round speed.
        if ( $('.right').hasClass('hardon') ) {
            settings.speed = 500
        }
        
        if (anim == "a") {
            $("#a").css("background", "#5DADEC");
            $("#tune").attr("src", "http://www.chiptape.com/chiptape/sounds/medium/Sound17.wav");
            setTimeout(function() {
                $("#a").css("background", "#5DADEC");
                $("#a").css("background", "");
            }, 100);
        }
        else if (anim == "b") {
            $("#b").css("background", "red");
            $("#tune").attr("src", "http://www.chiptape.com/chiptape/sounds/medium/R2chirp.wav");
            setTimeout(function() {
                $("#b").css("background", "red");
                $("#b").css("background", "");
            }, 100);
        }
        else if (anim == "c") {
            $("#c").css("background", "yellow");
            $("#tune").attr("src", "http://www.chiptape.com/chiptape/sounds/medium/BEEP2.wav");
            setTimeout(function() {
                $("#c").css("background", "yellow");
                $("#c").css("background", "");
            }, 100);
        }
        else if (anim == "d") {
            $("#d").css("background", "green");
            $("#tune").attr("src", "http://www.chiptape.com/chiptape/sounds/medium/blob.wav");
            setTimeout(function() {
                $("#d").css("background", "green");
                $("#d").css("background", "");
            }, 100);
        }
        else if (anim == "e") {
            $("#e").css("background", "cyan");
            $("#tune").attr("src", "http://www.chiptape.com/chiptape/sounds/medium/blob.wav");
            setTimeout(function() {
                $("#e").css("background", "cyan");
                $("#e").css("background", "");
            }, 100);
        }
        else if (anim == "f") {
            $("#f").css("background", "purple");
            $("#tune").attr("src", "http://www.chiptape.com/chiptape/sounds/medium/blob.wav");
            setTimeout(function() {
                $("#f").css("background", "purple");
                $("#f").css("background", "");
            }, 100);
        }


        audio[0].pause();
        audio[0].load();
        audio[0].play();

    }


    function letsplay() {
        var text = "";
        var possible = "abcdef";

        for (var i = 0; i < 1; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            settings.sequence.push(text);

        }




        function myLoop() {
            setTimeout(function() {
                animate(settings.sequence[settings.playNumber]);
                settings.playNumber++;
                if (settings.playNumber < settings.sequence.length) {
                    myLoop();
                }
                else {
                    settings.playNumber = 0;
                    listen();
                }
            }, settings.speed)
        }

        myLoop();

    }

    // RULES
    
    $("#show_hide").click(function () {
     $("#toggle_rls").toggle()
    });
    
    
    // LISTEN 

    function listen() {

        $("#a, #b, #c, #d, #e, #f").on("mousedown", function() {


            if (this.id == settings.sequence[settings.clicked]) {

                if (settings.clicked === settings.sequence.length - 1) {
                    $("#a, #b, #c, #d, #e, #f").off("mousedown");
                    settings.clicked = 0;
                    $(".butt.go").trigger("click");
                }
                else {
                    console.log("Right!");
                    settings.clicked++;
                }



            }
            else {
                console.log("WRONG");
                $("#fail").show();
                $("#fail").addClass("ItsOver");
                $("#tune").attr("src", "/sounds/wrong.wav");
                $(".title").text("DEAD!");
                audio[0].pause();
                audio[0].load();
                audio[0].play();
                // sequence[0].pause();
                $("#simon").css("filter", "blur(5px)");
                $("#simon").css("-webkit-filter", "blur(5px)");
                settings.clicked = 0;
                $("#blue, #red, #yellow, #green, #cyan, #purple").off("mousedown");
            }

        });

    }



    //BEGIN GAME

    $("#a, #b, #c, #d, #e, #f").on("click", function() {
        animate(this.id);
    });
    $(".go").on("click", function() {
        $(".dash").css("color", "red");
        $(".title").text("GO!");
        $("#a, #b, #c, #d, #e, #f, #scoreboard").css("-webkit-animation", "none");
        $("#a, #b, #c, #d, #e, #f, #scoreboard").css("-moz-animation", "none");
        $("#a, #b, #c, #d, #e, #f, #scoreboard").css("animation", "none");
        settings.round++;
        setTimeout(letsplay(), 100000); // make id and play it  --- should just be " letsplay(); "
        $(".dash").html(settings.round);
        //playit();
    });
    
    $(".right").on("click", function() { // indicates difficulty
        $(".right").toggleClass("hardon");
        $(".hard").toggleClass("diff");
    });

    
    $("#fail").on("click", function() {
        $("#fail").hide();
        $("#simon").removeAttr("style");
        settings.sequence = [];
        settings.round = 0;
        settings.playNumber = 0,
            settings.speed = 1000;
        settings.clicked = 0;
    });

}); //document ready
