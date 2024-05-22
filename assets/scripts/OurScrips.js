
 // Declare variables
 let nameAndAge = [];
 let imgStickman = document.getElementById("stickman");
 let posLeft = 0;
 let posHeight = 150;
 let imgCount = 0;
 let heightCount = 0;


function displayMenu(show){
    let menu = document.getElementById("menuDropdown");

    if(show){    
        menu.style.display = "block;"
    }
    else {
        menu.style.display = "none;"
    }
}


function animateMan(){    

    switch(imgCount){
        case  0 :
            imgStickman.src =  "assets/images/stickman.png";
            break;
        case 5 :
            imgStickman.src = "assets/images/stickman1.png";
            break;
        case 10 :
            imgStickman.src = "assets/images/stickman2.png";      
            break; 

    }
    
    imgStickman.style.display = "block";
    imgStickman.style.left = posLeft + "px";
    imgStickman.style.height = posHeight + "px";
    
    posLeft += 7;
    if (heightCount == 2){
        posHeight -= 1;
        heightCount = 0;
    }
    imgCount++;
    heightCount++;
    
    if(imgCount > 10){
        imgCount = 0;
    }

    if(posLeft < 1300){
        requestAnimationFrame(animateMan);
    }
    else{
        posLeft = 0;
        posHeight = 150;
        imgStickman.style.display = "none";
        imgStickman.style.left = 0;

    }

}




