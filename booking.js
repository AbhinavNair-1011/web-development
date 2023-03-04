document.addEventListener("DOMContentLoaded", function() {

    let btn= document.querySelector("#submit");
let name1=document.querySelector("#name");
let email1=document.querySelector("#email");
let phno1=document.querySelector("#phone");
let date1=document.querySelector("#date");
let tBody= document.querySelector("#tableBody");






function getFromCrud(){

    axios.get("https://crudcrud.com/api/70ba70c0bece4715a3a668e5043c7fc5/bookingApp")
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
    let btn=document.createElement("button");
    
    btn.appendChild(document.createTextNode("Delete"))
    btn.setAttribute("id","delete");
    btn.style.margin="10px";
    tr.appendChild(btn)
tBody.appendChild(tr)

    

})
       
    })

}
getFromCrud();

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
      
     
     
     axios.post("https://crudcrud.com/api/70ba70c0bece4715a3a668e5043c7fc5/bookingApp",userDetails).then((res)=>{
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

    function deleteUserData(){

        let deleteBtn=document.querySelector("#delete");
        deleteBtn.addEventListener("click", (e)=>{
           e.target.parentElement.style.display="none"
           let id= e.target.parentElement.firstChild.innerText;
           console.log(id)
           axios.delete("https://crudcrud.com/api/70ba70c0bece4715a3a668e5043c7fc5/bookingApp/?_id="+id)
           .then((res)=>{
            console.log(res)
           })
           .catch(err=>{
            console.log(err)
           })
        })
        
    }
     
    setTimeout(()=>{
        deleteUserData();

    },1000)

        
  
    


});
    
    

