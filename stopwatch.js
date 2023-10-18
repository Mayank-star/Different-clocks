window.onload=function(){
    
    var seconds=0;
    var tens=0;

    var appendseconds=document.getElementById("seconds");
    var appendtens=document.getElementById("tens");
    var buttonstart=document.getElementById("start-button");
    var buttonstop=document.getElementById("stop-button");
    var buttonreset=document.getElementById("reset-button");

    var interval;

    buttonstart.onclick=function(){
        clearInterval(interval);
        interval=setInterval(startTimer,10);

    }

    buttonstop.onclick=function(){
        clearInterval(interval);
    }

    buttonreset.onclick=function(){
        clearInterval(interval);
        seconds=0;
        tens=0;
        appendseconds.innerHTML="00";
        appendtens.innerHTML="00";

    }
    function startTimer(){

        tens++;

        if(tens<=9){
            appendtens.innerHTML="0"+tens;
        }
        if(tens>9){
            appendtens.innerHTML=tens;
        }
        if(tens>99){
            seconds++;
            appendseconds.innerHTML="0"+seconds;
            tens=0;
            appendtens.innerHTML="0"+0;

        }
        if(seconds>9){
            appendseconds.innerHTML=seconds;
        }

    }
}