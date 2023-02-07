document.addEventListener("DOMContentLoaded", function() {
    let title = document.getElementsByTagName("title")[0];
    title.innerText = "dom testingg";
   

    let heading=document.querySelector("h1");
    heading.style.color="orange";
    heading.style.fontSize="40px;"
   heading.backgroundColor="yellow"
   heading.style.border="10px dotted black"
   heading.style.textAlign="center"
   heading.innerHTML="HEADING"

    let inputs= document.querySelectorAll("input");
       for(let input of inputs){
       input.style.backgroundColor="blue"
       input.style.color="cyan";
    }
    // let listItems= document.querySelectorAll("li");
   
    // for(let list of listItems){
    //     list.innerHTML="CHANGED"
    //     list.style.color="brown"
    //     list.style.fontSize="25px"
    //     list.style.border="5px solid green"
    //     list.style.fontWeight="bold";
       
    // }
    // listItems[2].style.backgroundColor="green";
   
    let liByClass= document.getElementsByClassName("list-group-item");
   
    for(let list of liByClass){
        list.style.color="green";
        list.style.fontSize="25px"
        list.style.border="5px solid green"
        list.style.fontWeight="bold";
    }

// let liByTag= document.getElementsByTagName("li");
// for( let li of liByTag){
//     li.style.color="purple"
// }
});
    
