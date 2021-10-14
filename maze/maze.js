$(function(){
    let start = $("#start");
    let end = $("#end");
    let isPlaying = false;
    let boundary = $(".boundary");

    start.click(function(){
        if(!isPlaying){
            play();
        }else{
            reset();
        }
    });

    function play(){
        isPlaying = true;

        start.mousemove((evt) => {
            if(isPlaying){
                    if(parseInt(start.css("left")) >= -2 ){
                        start.css({
                            "top": parseInt(evt.clientY) - 150 + "px",
                            "left": parseInt(evt.clientX) - 455 + "px"
                        });
                            
                        if((parseInt(start.css("left")) + 35) >= (parseInt(end.css("left")))){
                                window.alert("You win! :]");
                                reset();
                        }

                        function gameover(event){
                            if(isPlaying){
                                boundary.css({"background-color": "red"});
                                setTimeout(() => {
                                    window.alert("Sorry, you lost. :[");
                                }, 100);
                                
                                isPlaying = false;
                            }   
                        }

                        boundary.mouseenter(gameover);

                        boundary.mouseleave(reset);

                    }else{
                        window.alert("you can't move outside the maze")
                        reset();
                    }
            }
        });
    }
    
    function reset(event){
        isPlaying = false;
        start.css({
            "top": 205 + "px",
            "left": 0 + "px"
        });
        boundary.css({"background-color": "#eeeeee"});
    }
})