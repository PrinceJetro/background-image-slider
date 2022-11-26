imgsEl = document.querySelectorAll("img");
let currentImg = 2;
let timeout



function next(){
    currentImg = currentImg +1;
    clearTimeout(timeout);
    nextFunction()
    
}
function prev(){
    currentImg = currentImg -1;
    clearTimeout(timeout)
    nextFunction()
    
}

nextFunction();
function nextFunction(){

    
   
    if(currentImg > imgsEl.length){
        currentImg =1    
    }
    else if(currentImg < 1){
        currentImg = imgsEl.length
    }
    document.getElementById("image-container").style.transform=`translateX(-${(currentImg -1) * 500}px)`;
    console.log(currentImg -1);
    timeout=setTimeout(() => {
        currentImg= currentImg +1;
        nextFunction()
        
    }, 3000);
    
}


