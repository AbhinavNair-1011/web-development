document.addEventListener("DOMContentLoaded", function() {

    let btn= document.querySelector("#submit");
let name1=document.querySelector("#name");
let email1=document.querySelector("#email");
let phno1=document.querySelector("#phone");
let date1=document.querySelector("#date");
let tableBody= document.querySelector("tbody");

let th=document.querySelectorAll("th");





  let arr=[];


    btn.addEventListener("click", (e)=>{
        e.preventDefault();
       
        if(name1.value!==""&&email1.value!==""&&phno1.value!==""){

        
        let userDetails={
        name:name1.value,
        email:email1.value,
        phone:phno1.value,
        date:date1.value,
        delete:true
      }
      
     
     
     axios.post("https://crudcrud.com/api/7ac37837ab0f4135aa9f9d13368dd602/bookingApp",userDetails).then((res)=>{
        console.log(res)
    })


     alert("data has been send to crudcrud endpoint")
       


       
        }else{
            alert("please enter all the details")
        }
       name1.value=""
      email1.value=""
       phno1.value=""
       date1.value=""
    });

        


});
    
    

