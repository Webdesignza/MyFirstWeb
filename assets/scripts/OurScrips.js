
 // Declare variables
 let nameAndAge = [];
 let imgStickman = document.getElementById("stickman");
 let posLeft = 0;


function add(name, age){

    let person = new clsPerson();

    let docValues = [];

    docValues.push(person);       

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";

    person.ShowPerson();
}


function run(){
    // Declarations
    let tblDisplay = document.getElementById("tblDisplay");

    animateMan();
    
    let strInnerHtml = "<tr> <td><b>Name</b></td>  <td><b>Age</b></td> <td><b>Old?</b></td> </tr> ";

    // Loop through array
    for(let x = 0;x < nameAndAge.length;x++){
          
       strInnerHtml = strInnerHtml +  " <tr> <td>" + nameAndAge[x][0] + "</td>";
       
       strInnerHtml += "<td>" + nameAndAge[x][1] + "</td>";
       

        if(nameAndAge[x][1] < 40){
            strInnerHtml += "<td>you are young</td></tr>";
        }
        else{
            strInnerHtml += "<td>you are old!!</td></tr>";
        }


    }

    tblDisplay.innerHTML = strInnerHtml;

}

function animateMan(){    

    imgStickman.style.display = "block";
    imgStickman.style.left = posLeft + "px";

    posLeft += 7;

    

    if(posLeft < 1300){
        requestAnimationFrame(animateMan);
    }

}

class clsPerson{
  

    constructor(name,age){
        this.varName = name;
        this.varAge = age;
    }

    get name(){
        return this.varName;
    }

    set name(prmName){
        this.varName = prmName;
    }

    get age(){
        this.varAge;
    }

    set age(prmAge){
        this.varAge = prmAge;
    }

    ShowPerson(){
         alert(this.varName + " , " + this.varAge);
    }

}


