  let newBtn = document.querySelector(".grd-size")
  let para = document.querySelector(".value")
  let html = document.querySelector("body")
  let togglegrid = document.querySelector(".toggle")
  let eraser = document.querySelector(".eraser")
  const clr = document.querySelector(".clear-btn")
  let gridCont = document.querySelector(".pad")
  let sc = document.querySelector(".s-container")
  let sl = document.querySelector(".slider")
  let colorr = document.querySelector("#color");

  
function x(defSize){

    newBtn.addEventListener("click",()=>{
        grids.forEach(grid =>{
           grid.remove();
        })
       })
   
  let k = false
  let erase = false; 
  let neon = true;

  gridCont.addEventListener("mousedown", ()=>{
      k = true;
      
     
  }) 

  gridCont.addEventListener("mouseup", ()=>{
      k = false;
      
  }) 
  gridCont.addEventListener("mouseleave", ()=>{
      k = false;
      
  }) 
  sc.addEventListener("click",()=>{
      neon = !neon;
  })
 
eraser.addEventListener("click",()=>{
 erase = !erase
 
})
html.addEventListener('dragstart', (e) => {
  e.preventDefault()
})

html.addEventListener('drop', (e) => {
  e.preventDefault()
})


       for(i=0;i<`${(defSize)}` ** 2;i++){
            let p = document.createElement("div"); 
            p.classList.add("grid");           
            gridCont.appendChild(p)
        }
       
        
        gridCont.style.gridTemplateColumns = `repeat(${defSize},1fr)`;
        gridCont.style.gridTemplateRows = `repeat(${defSize},1fr)`;
        
        let grids = document.querySelectorAll(".grid") 
                
       
           
        

            
   
  
      togglegrid.classList.remove("red")  
      eraser.classList.remove("red")
      sl.classList.remove("slide-on")
                    
     
            grids.forEach(grid =>{
                clr.addEventListener("click",()=>{
           
                    grid.style.backgroundColor = "transparent"  
                    grid.style.boxShadow = "none"    
                })

                
                grid.addEventListener("mousedown",()=>{
                        
                    if(erase === false && neon === true){
                    grid.style.backgroundColor = `${colorr.value}`
                    grid.style.boxShadow = `0 0 0px ${colorr.value}, inset  0 0 10px 3px ${colorr.value}, 0 0 20px 3px ${colorr.value}`
                    
                   }
                   else if(erase === true ){
                    grid.style.backgroundColor = "transparent"
                    grid.style.boxShadow = "none"
                   }
                })  

                grid.addEventListener("mouseenter",()=>{
                    if(erase === true && k === true){
                        grid.style.backgroundColor =`transparent`;
                        grid.style.boxShadow = "none"
                        
                    }
                    else if(k === true && neon === true){
                    grid.style.backgroundColor =`${colorr.value}`;
                    grid.style.boxShadow = `0 0 0px ${colorr.value}, inset  0 0 10px 3px ${colorr.value}, 0 0 20px 3px ${colorr.value}`

                    }
                    else if(k === true && neon === false){
                        grid.style.backgroundColor =`${colorr.value}`;
                        grid.style.boxShadow = "none"
                    };
                                        
                })     
                
                
            })
            
        
        
      

        togglegrid.addEventListener("click",()=>{
           
            grids.forEach(grid =>{
                grid.classList.toggle("grid");      
            })
           
        })       

}


x(16)

   
newBtn.addEventListener("click",()=>{
    x(newBtn.value)
    para.innerText = ` ${newBtn.value} X ${newBtn.value}`;
  
})

  
 
togglegrid.addEventListener("click",()=>{
    togglegrid.classList.toggle("red")
}) 
eraser.addEventListener("click",()=>{
    eraser.classList.toggle("red")
}) 



sc.addEventListener("click",()=>{
    sl.classList.toggle("slide-on")
})


