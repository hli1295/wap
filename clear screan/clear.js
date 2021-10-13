window.onload = function(){
    var container = $("#container");
    let widthAmnt = $("#circleWidth");
    let growthSize = $("#growthSize");
    let interval = $("#growInterval");
    let numberOfCircle = $("#numberCircle")
    let start = $("#startBtn");
    let timer;
    let top = 25;
    let left = 50;
    let colors = ["red", "yellow", "black", "gray", "purple", "lightblue"];
    let pos = [7, 2, 10, 13, 15, 5];

    function resizeCircle(intv, gsize){

        $(".circle").each(function(id, e){
            // window.alert("12");
            timer = setInterval(() => {
                $(e).css("height", (index, old) => {
                    return parseInt(old) + parseInt(gsize) + "px";
                });
        
                $(e).css("width", (index, old) => {
                    return parseInt(old) + parseInt(gsize) + "px";
                });
        
        
            }, parseInt(intv));
        });
    }
    

    


    start.click(() => {
        var randomColor = '';
        var randPos;

        for(let i = 0; i < numberOfCircle.val(); i++){
            randomColor = colors[Math.floor(Math.random()*colors.length)];
            randPos = pos[Math.floor(Math.random()*pos.length)];
            container.append($("<div>", {
                id: `${i}`,
                class: "circle",
                click: function(){
                    $("div").remove(`#${i}`);
                    clearInterval(timer);
                },
                css: {"position": "absolute",
                    "border": "black solid 1px",
                    "width": widthAmnt.val() + "px",
                    "height": widthAmnt.val() + "px",
                    "border-radius": 50 + "%",
                    "opacity": 1,
                    "background-color": randomColor,
                    "top": (top + randPos) + "vh",
                    "left": (left - randPos) + "%"
                },
                mouseover: function(){
                    $(this).css({"opacity": 0.2});
                },

                mouseout: function(){
                    $(this).css({"opacity": 1}); 
                }
            }));
        }

        
        resizeCircle(interval.val(),  growthSize.val());
        
    });
}