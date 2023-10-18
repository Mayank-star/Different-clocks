 let d=document;
 let appenddays=d.querySelector(".days");
let appendhours=d.querySelector(".hours");
let appendminutes=d.querySelector(".minutes");
let appendseconds=d.querySelector(".seconds");
let audio=d.querySelector("audio");
 console.log(audio);
// let section=d.querySelector("#first");
// console.log(section);
 
// console.log(appendseconds.textContent);
let days=0,hours=0,minutes=0,seconds=0;
let buttonstart=d.getElementById("start-button");
let cancelbutton=d.getElementById("cancel-button");

let timer;
 buttonstart.onclick=function(){
    
      days=appenddays.textContent;
      hours=appendhours.textContent;
      minutes=appendminutes.textContent;
      seconds=appendseconds.textContent;
      
       timer=setInterval(()=>{

               if(days==0 && hours==0 && minutes==0 && seconds==0){
                       
                       audio.innerHTML='<source src="ringtone/tone1.mp3" >';
                       console.log(audio);
                       clearInterval(timer) ;
                      
                     
               }
               else{

                    if(seconds!=0){
                         appendseconds.textContent= --seconds; 
                       }
                       else if(minutes!=0 && seconds==0){
                         appendminutes.textContent=--minutes;
                         seconds=59;
                         appendseconds.textContent= seconds;
                         
                       }
                       else if(hours!=0 && minutes==0){
                            appendhours.textContent=--hours;
                            minutes=59;
                            appendminutes.textContent= minutes;
                            seconds=59;
                            appendseconds.textContent= seconds;
          
                       }
                       else{
          
                             appenddays.textContent=--days;
                             hours=23;
                             appendhours.textContent=hours;
                             minutes=59;
                             appendminutes.textContent= minutes;
                             seconds=59;
                             appendseconds.textContent= seconds;
                            
                       }
               }
             
             
             

     },1000)


 }
 
 cancelbutton.onclick=function(){
      
      
      clearInterval(timer);
 }

 
