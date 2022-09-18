  let newBtn = document.querySelector(".grd-size")
  let para = document.querySelector(".value")
  let html = document.querySelector("body")
  let togglegrid = document.querySelector(".toggle")
  let eraser = document.querySelector(".eraser")
  const clr = document.querySelector(".clear-btn")
  let gridCont = document.querySelector(".pad")
 
  html.addEventListener('dragstart', (e) => {
    e.preventDefault()
  })
  
  html.addEventListener('drop', (e) => {
    e.preventDefault()
  })
 
function x(defSize){

    let rand = false;
    let k = false
    let erase = false; 
   
  

       for(i=0;i<`${(defSize)}` ** 2;i++){
            let p = document.createElement("div"); 
            p.classList.add("grid");           
            gridCont.appendChild(p)
        }

        
        gridCont.style.gridTemplateColumns = `repeat(${defSize},1fr)`;
        gridCont.style.gridTemplateRows = `repeat(${defSize},1fr)`;
        
        let grids = document.querySelectorAll(".grid") 
                
       
           
        

            newBtn.addEventListener("click",()=>{
                 grids.forEach(grid =>{
                    grid.remove();
                 })
                })
   
    

        let colorr = document.querySelector("#color")
        
     //==   

     gridCont.addEventListener("mousedown", ()=>{
        k = true;
        
       
    }) 

    gridCont.addEventListener("mouseup", ()=>{
        k = false;
        
    }) 
    gridCont.addEventListener("mouseleave", ()=>{
        k = false;
        
    }) 
   
 eraser.addEventListener("click",()=>{
   erase = !erase
   
 })
 
      //==    
      togglegrid.classList.remove("red")  
      eraser.classList.remove("red")              
     
            grids.forEach(grid =>{

                
                grid.addEventListener("mousedown",()=>{
                
                    if(erase === false){
                    grid.style.backgroundColor = colorr.value
                   
                   }
                   else if(erase === true){
                    grid.style.backgroundColor = "white"
                   }
                })  
            
            

                grid.addEventListener("mouseenter",()=>{
                   

                    if(k === true){
                    grid.style.backgroundColor =colorr.value
                    
                    
                    }
                    if(erase === true && k === true){
                        grid.style.backgroundColor =`white`
                    }
                                        
                })     
                
                
            })
            
        
        
      

        togglegrid.addEventListener("click",()=>{
           
            grids.forEach(grid =>{
                grid.classList.toggle("grid");      
            })
           
        })
        

        clr.addEventListener("click",()=>{
            grids.forEach(grid =>{
                grid.style.backgroundColor = "transparent"      
            })
        })  
        

}


x(16)

   
newBtn.addEventListener("click",()=>{
    x(`${newBtn.value}`)
    para.innerText = ` ${newBtn.value} X ${newBtn.value}`
})
  
 
togglegrid.addEventListener("click",()=>{
    togglegrid.classList.toggle("red")
}) 
eraser.addEventListener("click",()=>{
    eraser.classList.toggle("red")
}) 
