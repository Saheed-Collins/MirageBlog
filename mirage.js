// Date

// to get the date
   document.getElementById('todayDate').innerHTML = new Date() 

// autotyping

let sentence=['Entertainment', 'Politics','Sports', 'Education']
let sectionNew=document.getElementById('sectionNew');
let arrsentence=0;
let arrWords=0;

function autotype() {
    letterword=sentence[arrsentence][arrWords]
    sectionNew.innerHTML+= letterword  
    arrWords++
    setTimeout (function(){
        if (sentence[arrsentence][arrWords]) {
            autotype()   
        } 
        else{
            clear()
        }

    },200);
}
autotype() 
    
  function clear() {
    if (sectionNew.innerHTML=='') {
        if (sentence[arrsentence+1]) {
            arrsentence++
            arrWords=0;
            autotype()
            
        }
        else{
            arrsentence=0
            arrWords=0
            autotype()
        }
        return;
        
    }
    sectionNew.innerHTML=sectionNew.innerHTML.slice(0,-1)
    setTimeout(function() {
        clear()
        
    },100)
   
    
  }
  
//   autotyping end
  