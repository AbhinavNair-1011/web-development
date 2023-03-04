document.addEventListener("DOMContentLoaded", function() {

    let btn= document.querySelector("#submit");
let name1=document.querySelector("#name");
let email1=document.querySelector("#email");
let phno1=document.querySelector("#phone");
let date1=document.querySelector("#date");
let tBody= document.querySelector("#tableBody");






function getFromCrud(){

    axios.get("https://crudcrud.com/api/9c5910c3743b43039d6a2c5fa2fbe4f0/bookingApp")
    .then((res)=>{
        
res.data.forEach((each)=>{
    let tr=document.createElement("tr");
 

    for(prop in each ){
        if(prop==="delete"){
           continue;
        }
      let td=document.createElement("td");
      td.appendChild(document.createTextNode(each[prop]))
      tr.appendChild(td);
    }
tBody.appendChild(tr)

    

})
       
    })

}
 
  


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
      
     
     
     axios.post("https://crudcrud.com/api/9c5910c3743b43039d6a2c5fa2fbe4f0/bookingApp",userDetails).then((res)=>{
       res.forEach((each)=>{
        
       })
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

        
getFromCrud();

});
    
    

