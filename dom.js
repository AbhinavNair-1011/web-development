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




let btn=document.querySelector("#submit");


let newInput=document.createElement("input");
let iform=document.querySelector(".form-inline")


newInput.className="form-control mr-2";
newInput.setAttribute("type","text");
newInput.setAttribute("id","m");
newInput.setAttribute("placeholder","Item Description")

iform.insertBefore(newInput,btn);

let inputs= document.querySelectorAll("input");
       for(let input of inputs){
       input.style.backgroundColor="blue"
       input.style.color="cyan";
    }






btn.addEventListener("click",(e)=>{
    e.preventDefault();
let inputValue= document.querySelector("#n").value;
let descriptionValue= document.querySelector("#m").value;
let li= document.createElement("li");
let newBtn= document.createElement("button");
let editbtn= document.createElement("button");


editbtn.appendChild(document.createTextNode("Edit"))

editbtn.className="edit"
editbtn.style.width="50px"
editbtn.style.height="30px"
editbtn.style.float="right";
editbtn.style.color="yellow";
editbtn.style.fontSize="15px"
editbtn.style.backgroundColor="green";





newBtn.appendChild(document.createTextNode("X"))
newBtn.className="okay"
newBtn.style.width="30px"
newBtn.style.height="40px"
newBtn.style.float="right";
newBtn.style.color="yellow";
newBtn.style.backgroundColor="gray";

li.appendChild(document.createTextNode(`${inputValue} -->${descriptionValue}`))

li.appendChild(newBtn)
li.appendChild(editbtn)
li.className="list-group-item";
li.style.color="red";
li.style.fontSize="25px"
li.style.border="5px solid green"
li.style.fontWeight="bold"

listItem.parentElement.appendChild(li)

});



let listItems= document.querySelectorAll("li");
for(let list of listItems){

    var newBtn= document.createElement("button");

newBtn.appendChild(document.createTextNode("X"))
newBtn.className="okay"
newBtn.style.width="30px"
newBtn.style.height="40px"
newBtn.style.float="right";
newBtn.style.color="yellow";
newBtn.style.backgroundColor="gray";

let editbtn= document.createElement("button");


editbtn.appendChild(document.createTextNode("Edit"))

editbtn.className="edit"
editbtn.style.width="50px"
editbtn.style.height="30px"
editbtn.style.float="right";
editbtn.style.color="yellow";
editbtn.style.fontSize="15px"
editbtn.style.backgroundColor="green";

    list.appendChild(newBtn);
    list.appendChild(editbtn)
    
}
   
ul.addEventListener('click',remove);

function remove(e){
  
   if(e.target.classList.contains("okay")){
   let li= e.target.parentElement;
   li.style.display="none"
   }
}

let search=document.querySelector(".search");

search.addEventListener("keyup",filter);

function filter(e){
    let listItems= document.querySelectorAll("li");
    
    for(let each of listItems){
        let value=each.innerText.toLowerCase();
        if(value.indexOf(e.target.value.toLowerCase())!=-1){
           each.style.display="block";
        }else{
            each.style.display="none"
        }
    }
   
}

// let editbtn=document.querySelectorAll(".edit");
ul.addEventListener("click",edit);

function edit(e){
    if(e.target.classList.contains("edit")){
        
        
        let newBtn= document.createElement("button");

        newBtn.appendChild(document.createTextNode("Set"))
        newBtn.className="set"
        newBtn.style.width="50px"
        newBtn.style.height="30px"
        newBtn.style.float="right";
        newBtn.style.color="yellow";
        newBtn.style.backgroundColor="red";
        newBtn.style.fontSize="16px"


   
    let newInput= document.createElement("input");
    newInput.className="editedValue";
newInput.style,backgroundColor="grey";
newInput.setAttribute("placeholder", "Edit Here")
newInput.style.fontSize="15px"
newInput.style.float="right"


let x=e.target.parentElement;
x.appendChild(newBtn)
x.appendChild(newInput)



newBtn.addEventListener("click",(e)=>{
    let v=newInput.value;


    e.target.parentElement.firstChild.textContent=v;

    e.target.parentElement.lastElementChild.style.display="none";
    let xx=e.target.parentElement.children;
 for(let x of xx){
    x.style.display="none"
   
 }
 var newBtn= document.createElement("button");

 newBtn.appendChild(document.createTextNode("X"))
 newBtn.className="okay"
 newBtn.style.width="30px"
 newBtn.style.height="40px"
 newBtn.style.float="right";
 newBtn.style.color="yellow";
 newBtn.style.backgroundColor="gray";

 var editbtn= document.createElement("button");


editbtn.appendChild(document.createTextNode("Edit"))

editbtn.className="edit"
editbtn.style.width="50px"
editbtn.style.height="30px"
editbtn.style.float="right";
editbtn.style.color="yellow";
editbtn.style.fontSize="15px"
editbtn.style.backgroundColor="green";

x.appendChild(newBtn)
x.appendChild(editbtn)

})



    }
}



});;