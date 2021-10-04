
let state={
    isAnimating:false,
    animation:[],
    isTurbo:false,
};


function changeText(newText){
    document.getElementById("text-area").value=newText;
}

function animate(idx){
    if(state.isAnimating){
        changeText(state.animation[idx]);
        setTimeout(()=>animate((idx+1)%state.animation.length),state.isTurbo?50:250);
        console.log(state);
    }
}
window.onload=function(){

    let textArea=document.getElementById("text-area");
    let animation=document.getElementById("animation");
    let fontSize=document.getElementById("fontsize");
    let turbo=document.getElementById("turbo");
    let stop=document.getElementById("stop");
    let start=document.getElementById("start");
    //listeners
    start.onclick=()=>{
        state.isAnimating=true;
        state.animation=textArea.value.split("=====");
    
        //starting a new animation
        Array.from(document.getElementsByClassName("disable-on-start")).forEach(element => {
            element.disabled=true;
        });
        Array.from(document.getElementsByClassName("disable-on-stop")).forEach(element => {
            element.disabled=false;
        });
        animate(0);
    }
    stop.onclick=()=>{
        state.isAnimating=false;
        textArea.value=state.animation.join("=====");
        //stoping animation
        Array.from(document.getElementsByClassName("disable-on-stop")).forEach(element => {
            element.disabled=true;
        });
        Array.from(document.getElementsByClassName("disable-on-start")).forEach(element => {
            element.disabled=false;
        });
    }
    animation.onchange =()=>{
        textArea.value = ANIMATIONS[animation.value];
    }
    fontSize.onchange=()=>{
        textArea.style.fontSize=fontSize.value+"pt";
    }
    turbo.onclick=()=>{
        state.isTurbo=turbo.checked;
    }
}
