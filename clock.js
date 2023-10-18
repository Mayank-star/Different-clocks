  let article=document.querySelector("article");
//   console.log(article);
let hours=document.querySelectorAll("span")[0];
let minutes=document.querySelectorAll("span")[1];
let seconds=document.querySelectorAll("span")[2];
  

// let date=new Date();
// console.log(date);

//     let time = date.toLocaleTimeString();
//     console.log(time);

// let hour=time.split(":");
// console.log(hour[0]);
// let min=time.split(":");
// console.log(hour[1]);
// let sec=time.split(":"); 
// console.log(hour[2]);
         let date=new Date();
         let time = date.toLocaleTimeString();

         let hour=time.split(":")[0];
         console.log(hour);
         let min=time.split(":")[1];
         console.log(min);
         let sec=time.split(":")[2].split(" ")[0];
         console.log(sec);
         let bit=time.split(":")[2].split(" ")[1];
          // console.log(bit);
         let slot=document.getElementById("slot");
          // console.log(slot);
         hours.textContent=hour;
         minutes.textContent=min;
         seconds.textContent=sec;
         
         
        
       
setInterval(()=>{
                    
                    if(sec>=59){
                      sec=0;
                      minutes.textContent=++min;
                    }
                    else if(min>=59 && sec>=59) {
                      sec=0;
                      min=0;
                      hours.textContent=++hour;
                    }   
                     if(hour>=12 ){
                      hours.textContent=0;
                       
                    } 
                    if(bit!=slot.textContent){
                        slot.textContent=bit;
                    }
                    
                     seconds.textContent=++sec;
                     
},1000);