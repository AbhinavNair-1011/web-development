document.addEventListener("DOMContentLoaded", function() {
    let title = document.getElementsByTagName("title")[0];
    title.innerText = "dom testingg";
   

    let heading=document.querySelectorAll("h1");
    for (heading of heading){
    heading.style.color="orange";
    heading.style.fontSize="40px;"
   heading.backgroundColor="yellow"
   heading.style.border="10px dotted black"
   heading.style.textAlign="center"
   heading.innerHTML="FORM"
    }
   
   //parent element used
   heading.parentElement.setAttribute("id","set-with-parent-element");


    let inputs= document.querySelectorAll("input");
       for(let input of inputs){
       input.style.backgroundColor="blue"
       input.style.color="cyan";
    }

    let listItem= document.querySelector("li");
   
    // for(let list of listItems){
    //     list.innerHTML="CHANGED"
    //     list.style.color="brown"
    //     list.style.fontSize="25px"
    //     list.style.border="5px solid green"
    //     list.style.fontWeight="bold";
       
    // }
    // listItems[1].style.backgroundColor="green";
//    listItems[2].style.display="none";


// let odd= document.querySelectorAll("li:nth-child(odd)");
// for(let li of odd){
//     li.style.backgroundColor="green"
// }
let ul= document.querySelector("ul");

ul.firstElementChild.style.color="green";

ul.lastElementChild.style.color="yellow"

ul.previousElementSibling.innerText="Changed Through Previous Sibling";

ul.nextElementSibling.innerText=" Changed Through Next Sibling"


let h1 = document.querySelector("#header-title");
let parentdiv=h1.parentElement;


let newElem= document.createElement("h1");
let newText= document.createTextNode("inserted after");

let newElem2= document.createElement("h1");
let newText2= document.createTextNode("inserted before");
newElem.appendChild(newText);
newElem2.appendChild(newText2);
parentdiv.insertBefore(newElem2,h1);
parentdiv.insertBefore(newElem,h1.nextElementSibling);


let newElem3= document.createElement("li");
let newText3= document.createTextNode("inserted list ");
newElem3.appendChild(newText3);
listparent=listItem.parentElement;
listparent.insertBefore(newElem3,listItem);
newElem3.className="list-group-item";
let liByClass= document.getElementsByClassName("list-group-item");
   
for(let list of liByClass){
    list.style.color="red";
    list.style.fontSize="25px"
    list.style.border="5px solid green"
    list.style.fontWeight="bold";
}

});

