let d=document;
let hoursref=d.getElementsByTagName("div")[0];
// console.log(hoursref);
let minutesref=d.getElementsByTagName("div")[1];
// console.log(minutesref);
let slotref=d.getElementsByTagName("div")[2];
// console.log(slotref);
 
let buttonref=d.getElementsByTagName("button")[0];
// console.log(buttonref);

let hourstext , minutestext,slottext;
let time=new Date().toLocaleTimeString();
// console.log(time.split(":")[2].split(" ")[1]);

// let id=setInterval(()=>{
//     let time=new Date().toLocaleTimeString();
//     console.log(time);
// },1000)




let audiodref=d.getElementsByTagName("audio")[0];
console.log(audiodref);
 buttonref.addEventListener("click",e=>{
      e.preventDefault();
      hourstext=hoursref.textContent;
      minutestext=minutesref.textContent;
      slottext=slotref.textContent.toUpperCase();
      // console.log(slottext);

    //   console.log(hourstext);
    //   console.log(minutestext);
     let id= setInterval(()=>{
            let time=new Date().toLocaleTimeString();
            let value1=time.split(":")[0];
            let value2=time.split(":")[1];
            let value3=time.split(":")[2].split(" ")[1];
            // console.log(value3);
            
            // console.log("hello");

            if(hourstext.split("")[0]!=0){
               if(hourstext==value1 && minutestext==value2 && slottext==value3){
                      audiodref.innerHTML='<source src="ringtone/tone2.mp3" >';
                     //  console.log("done");
                     clearInterval(id);
                     
                }
             }
             else{
                  if(hourstext.split("")[1]==value1 && minutestext==value2 && slottext==value3){
                       audiodref.innerHTML='<source src="ringtone/tone2.mp3" >';
                      //  console.log("done");
                      clearInterval(id);
                      
                 }
   
             }   
              

      },1000)

 })

 