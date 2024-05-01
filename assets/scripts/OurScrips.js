
 // Declare variables
 let nameAndAge = [];


function add(){
    let docValues = [];

    docValues.push(document.getElementById("name").value);
    docValues.push(document.getElementById("age").value);    

    nameAndAge.push(docValues);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";

    alert(nameAndAge);
}


function run(){
    // Declarations
    let tblDisplay = document.getElementById("tblDisplay");
    
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



